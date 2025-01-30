import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import "./PieChart.scss";

const AreaPieChart = ({ title, data, dataKey, nameKey, theme, pieColors }) => {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    const formatTooltipValue = (value) => `${value}%`;
    const formatLegendValue = (value) =>
        value ? value.charAt(0).toUpperCase() + value.slice(1) : "";

    return (
        <div className="pie-chart">
            <div className="pie-chart-info">
                <div className="chart-info-data">
                    <div className="info-data-value">{title}</div>
                </div>
            </div>
            <div className="pie-chart-wrapper">
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart>
                        <Tooltip formatter={formatTooltipValue} />
                        <Legend
                            iconType="circle"
                            iconSize={10}
                            verticalAlign="top"
                            align="right"
                            formatter={formatLegendValue}
                        />
                        <Pie
                            data={data}
                            dataKey={dataKey}
                            nameKey={nameKey}
                            cx="50%"
                            cy="50%"
                            innerRadius="40%"
                            outerRadius="80%"
                            fill="#8884d8"
                            paddingAngle={5}
                            isAnimationActive={false}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={pieColors ? pieColors[index % pieColors.length] : "#8884d8"}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AreaPieChart;
