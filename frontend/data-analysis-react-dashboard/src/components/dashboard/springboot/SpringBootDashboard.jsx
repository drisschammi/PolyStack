import React from 'react';
import AreaCharts from '../common/AreaCharts';
import PurchaseTrendsChart from './PurchaseTrendsChart';
import "./SpringBootDashboard.scss";

const chartConfigs = [
    {
        title: "Monthly Purchases",
        endpoint: '/api/v1/monthly-policy-trends',
        dataKey: "count",
        nameKey: "month",
        lineColor: "#475be8",
        gridColumn: "span 2"
    },
    {
        title: "Daily Purchases",
        endpoint: '/api/v1/daily-policy-trends',
        dataKey: "count",
        nameKey: "date",
        lineColor: "#475be8",
        gridColumn: "span 2"
    }
];

const SpringBootDashboard = () => {
    return (
        <div className="springboot-dashboard">

            <div className="dashboard-links">
                <a
                    href={import.meta.env.VITE_SPRINGBOOT_URL + "swagger-ui.html"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dashboard-link"
                >
                    Spring Boot - Documentation
                </a>
            </div>

            {/* Render the charts */}
            <AreaCharts>
                {chartConfigs.map((config, index) => (
                    <PurchaseTrendsChart key={index} {...config} />
                ))}
            </AreaCharts>

        </div>
    );
};

export default SpringBootDashboard;