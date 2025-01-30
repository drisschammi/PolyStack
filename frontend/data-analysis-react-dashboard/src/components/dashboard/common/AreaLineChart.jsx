import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import "./LineChart.scss";

const AreaLineChart = ({ title, data, dataKey, nameKey, theme, lineColor }) => {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    const formatTooltipValue = (value) => `${value}`;
    const formatLegendValue = (value) =>
        value ? value.charAt(0).toUpperCase() + value.slice(1) : "";

    return (
        <div className="line-chart">
            <div className="line-chart-info">
                <div className="chart-info-data">
                    <div className="info-data-value">{title}</div>
                </div>
            </div>
            <div className="line-chart-wrapper">
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={nameKey} />
                        <YAxis />
                        <Tooltip formatter={formatTooltipValue} />
                        <Legend formatter={formatLegendValue} />
                        <Line type="monotone" dataKey={dataKey} stroke={lineColor || "#8884d8"} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AreaLineChart;