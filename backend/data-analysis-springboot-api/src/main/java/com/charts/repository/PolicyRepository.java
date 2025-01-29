package com.charts.repository;

import com.charts.model.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PolicyRepository extends JpaRepository<Policy, Long> {

    // counting how many policies were purchased in each month
        // returns a list of monthly counts
    @Query("SELECT TO_CHAR(p.date_of_purchase, 'Month') AS purchaseMonth, COUNT(p) AS policyCount " +
            "FROM Policy p " +
            "GROUP BY TO_CHAR(p.date_of_purchase, 'Month'), EXTRACT(MONTH FROM p.date_of_purchase) " +
            "ORDER BY EXTRACT(MONTH FROM p.date_of_purchase)")
    List<MonthlyPolicyCountProjection> findMonthlyPolicyCounts();

    // counting how many policies were purchased on each specific day.
        // It returns a list of daily counts.
    @Query("SELECT TO_CHAR(p.date_of_purchase, 'YYYY-MM-DD') AS purchaseDate, COUNT(p) AS policyCount " +
            "FROM Policy p " +
            "GROUP BY TO_CHAR(p.date_of_purchase, 'YYYY-MM-DD') " +
            "ORDER BY TO_CHAR(p.date_of_purchase, 'YYYY-MM-DD')")
    List<DailyPolicyCountProjection> findDailyPolicyCounts();

}