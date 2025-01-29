package com.charts.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Schema(name = "MonthlyTrendsDto", description = "DTO representing the count of policies purchased each month")
public class MonthlyTrendsDto {

    @Schema(description = "Name of the month of policy purchase", example = "January")
    private String month;

    @Schema(description = "Number of policies purchased in the month", example = "99")
    private long count;
}