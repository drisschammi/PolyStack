import React from 'react';
import AreaCharts from '../common/AreaCharts';
import DistributionChart from './DistributionChart';
import "./FlaskDashboard.scss";

const chartConfigs = [
    { title: "Customer Distribution by Region", endpoint: '/api/v1/region-distribution', dataKey: "percentage", nameKey: "region", pieColors: ["#475be8", "#f45d48", "#34c38f", "#f4b53f", "#ff3d60"] },
    { title: "Gender Distribution", endpoint: '/api/v1/gender-distribution', dataKey: "percentage", nameKey: "gender", pieColors: ["#4a90e2", "#f45d48"] },
];

const FlaskDashboard = () => {
    return (
        <div className="flask-dashboard">
            
            <div className="dashboard-links">
                <a
                    href={import.meta.env.VITE_FLASK_URL + "swagger-ui"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dashboard-link"
                >
                    Flask - Documentation
                </a>
            </div>
            
            {/* Render the charts */}
            <AreaCharts>
                {chartConfigs.map((config, index) => (
                    <DistributionChart key={index} {...config} />
                ))}
            </AreaCharts>
            
        </div>
    );
};

export default FlaskDashboard;