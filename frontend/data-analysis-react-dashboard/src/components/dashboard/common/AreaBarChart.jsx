import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import "./BarChart.scss";

const AreaBarChart = ({ title, data, xAxisKey, theme, barColors }) => {
    // Check if data exists and is not empty
    if (!data || data.length === 0) {
        return <div>No data available</div>; // Or handle gracefully
    }
    // Make sure to check if `barColors` is passed correctly
    const formatTooltipValue = (value) => `${value}`;
    const formatYAxisLabel = (value) => `${value}`;
    const formatLegendValue = (value) =>
        value.charAt(0).toUpperCase() + value.slice(1);

    // Get the keys of the bars (exclude `xAxisKey` because it's used for X-axis)
    const barKeys = Object.keys(data[0] || {}).filter((key) => key !== xAxisKey);

    return (
        <div className="bar-chart">
            <div className="bar-chart-info">
                <div className="chart-info-data">
                    <div className="info-data-value">{title}</div>
                </div>
            </div>
            <div className="bar-chart-wrapper">
                <ResponsiveContainer width="100%" height={240}>
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                    >
                        <XAxis
                            dataKey={xAxisKey}
                            tickSize={0}
                            axisLine={false}
                            tick={{
                                fill: theme === "light" ? "#676767" : "#676767",
                                fontSize: 14,
                            }}
                        />
                        <YAxis
                            tickFormatter={formatYAxisLabel}
                            tickCount={6}
                            axisLine={false}
                            tickSize={0}
                            tick={{
                                fill: theme === "light" ? "#676767" : "#676767",
                            }}
                        />
                        <Tooltip formatter={formatTooltipValue} cursor={{ fill: "transparent" }} />
                        {/* // Add a legend to the chart */}
                        <Legend
                            iconType="circle"
                            iconSize={10}
                            verticalAlign="top"
                            align="right"
                            formatter={formatLegendValue}
                        />

                        {/* Dynamically render bars based on data keys */}
                        {barKeys.map((key, index) => (
                            <Bar
                                key={index}
                                dataKey={key}
                                fill={barColors ? barColors[index % barColors.length] : "#8884d8"} // Use passed colors or default color
                                isAnimationActive={false}
                                barSize={24}
                                radius={[4, 4, 4, 4]}
                            />
                        ))}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};


export default AreaBarChart;