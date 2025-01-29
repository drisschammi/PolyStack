package com.charts.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DailyTrendsDto {

    private String date;

    private long count;
}