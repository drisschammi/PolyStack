package com.charts.controller;

import com.charts.dto.DailyTrendsDto;
import com.charts.dto.MonthlyTrendsDto;
import com.charts.service.PolicyAnalysisService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
@Tag(name = "Policy Analysis", description = "APIs for analyzing insurance policy data")
public class PolicyAnalysisController {

    private final PolicyAnalysisService analysisService;

    public PolicyAnalysisController(PolicyAnalysisService analysisService) {
        this.analysisService = analysisService;
    }

    @GetMapping("/monthly-policy-trends")
    @Operation(summary = "Get the count of policies purchased per month", description = "Returns the count of policies purchased for each month like 'month': 'JANUARY' -> 'count': 12")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the monthly policy trends"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<List<MonthlyTrendsDto>> getMonthlyPolicyTrends() {
        List<MonthlyTrendsDto> response = analysisService.getMonthlyPolicyTrends();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/daily-policy-trends")
    @Operation(summary = "Get the count of policies purchased per day", description = "Returns the count of policies purchased for each day like 'date': '2018-01-01' -> 'count': 4")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the daily policy trends"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<List<DailyTrendsDto>> getDailyPolicyTrends() {
        List<DailyTrendsDto> response = analysisService.getDailyPolicyTrends();
        return ResponseEntity.ok(response);
    }

}