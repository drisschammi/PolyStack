package com.charts.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Schema(name = "DailyTrendsDto", description = "DTO representing the count of policies purchased each day")
public class DailyTrendsDto {

    @Schema(description = "Date of policy purchase", example = "2018-01-01")
    private String date;

    @Schema(description = "Number of policies purchased on this day", example = "99")
    private long count;
}