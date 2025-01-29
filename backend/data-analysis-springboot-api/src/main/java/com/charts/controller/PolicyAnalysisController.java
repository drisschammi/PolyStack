package com.charts.controller;

import com.charts.dto.DailyTrendsDto;
import com.charts.dto.MonthlyTrendsDto;
import com.charts.service.PolicyAnalysisService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class PolicyAnalysisController {

    private final PolicyAnalysisService analysisService;

    public PolicyAnalysisController(PolicyAnalysisService analysisService) {
        this.analysisService = analysisService;
    }

    @GetMapping("/monthly-policy-trends")
    public ResponseEntity<List<MonthlyTrendsDto>> getMonthlyPolicyTrends() {
        List<MonthlyTrendsDto> response = analysisService.getMonthlyPolicyTrends();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/daily-policy-trends")
    public ResponseEntity<List<DailyTrendsDto>> getDailyPolicyTrends() {
        List<DailyTrendsDto> response = analysisService.getDailyPolicyTrends();
        return ResponseEntity.ok(response);
    }

}