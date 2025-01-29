package com.charts.repository;

public interface DailyPolicyCountProjection {
    String getPurchaseDate();  // Format: "yyyy-MM-dd"
    long getPolicyCount();
}