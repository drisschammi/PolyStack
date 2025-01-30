import React from 'react';
import AreaCharts from '../common/AreaCharts';
import CoverageChart from './CoverageChart';
import "./NodeDashboard.scss";

const chartConfigs = [
    {
        title: "Coverages by Vehicle Segment",
        endpoint: '/api/v1/coverage/vehicle-segment',
        xAxisKey: "vehicle_segment",
        barKey: [
            "bodily_injury_liability",
            "personal_injury_protection",
            "property_damage_liability",
            "collision",
            "comprehensive"
        ],
        barColors: ["#475be8", "#f45d48", "#34c38f", "#f4b53f", "#ff3d60"],
        gridColumn: "span 2"
    },
    {
        title: "Coverages by Fuel Type",
        endpoint: '/api/v1/coverage/fuel-type',
        xAxisKey: "fuel",
        barKey: [
            "bodily_injury_liability",
            "personal_injury_protection",
            "property_damage_liability",
            "collision",
            "comprehensive"
        ],
        barColors: ["#475be8", "#f45d48", "#34c38f", "#f4b53f", "#ff3d60"],
        gridColumn: "span 2"
    }
];

const NodeDashboard = () => {
    return (
        <div className="node-dashboard">

            <div className="dashboard-links">
                <a
                    href={import.meta.env.VITE_NODE_URL + "swagger-ui"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dashboard-link"
                >
                    Node - Documentation
                </a>
            </div>

            {/* Render the charts */}
            <AreaCharts>
                {chartConfigs.map((config, index) => (
                    <CoverageChart key={index} {...config} />
                ))}
            </AreaCharts>
            
        </div>
    );
};

export default NodeDashboard;