package com.charts.service;

import com.charts.dto.DailyTrendsDto;
import com.charts.dto.MonthlyTrendsDto;
import com.charts.repository.DailyPolicyCountProjection;
import com.charts.repository.MonthlyPolicyCountProjection;
import com.charts.repository.PolicyRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PolicyAnalysisService {

    private final PolicyRepository policyRepository;

    public PolicyAnalysisService(PolicyRepository policyRepository) {
        this.policyRepository = policyRepository;
    }

    // This method will return a list of DTOs for monthly policy trends
    public List<MonthlyTrendsDto> getMonthlyPolicyTrends() {
        // Fetch monthly policy counts from the repository
        List<MonthlyPolicyCountProjection> monthlyCounts = policyRepository.findMonthlyPolicyCounts();

        // Convert the results to a List of DTOs
        return monthlyCounts.stream()
                .map(entry -> new MonthlyTrendsDto(entry.getPurchaseMonth(), entry.getPolicyCount()))
                .collect(Collectors.toList());
    }

    // This method will return a list of DTOs for daily policy trends
    public List<DailyTrendsDto> getDailyPolicyTrends() {
        // Fetch daily policy counts from the repository
        List<DailyPolicyCountProjection> dailyCounts = policyRepository.findDailyPolicyCounts();

        // Convert the results to a List of DTOs
        return dailyCounts.stream()
                .map(entry -> new DailyTrendsDto(entry.getPurchaseDate(), entry.getPolicyCount()))
                .collect(Collectors.toList());
    }

}