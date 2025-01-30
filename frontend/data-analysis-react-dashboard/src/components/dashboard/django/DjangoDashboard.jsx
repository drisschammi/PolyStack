import React from "react";
import PremiumChart from "./PremiumChart";
import AreaCharts from "../common/AreaCharts";
import "./DjangoDashboard.scss";

const chartConfigs = [
    { title: "Premium by Region", endpoint: "api/v1/premium-by-region/", xAxisKey: "customer__region", barKey: "average_premium", barColors: ["#197A56"] },
    { title: "Premium by Fuel Type", endpoint: "api/v1/premium-by-fuel-type/", xAxisKey: "fuel", barKey: "average_premium", barColors: ["#146340"] },
    { title: "Premium by Income Group", endpoint: "api/v1/premium-by-income/", xAxisKey: "customer__income_group", barKey: "average_premium", barColors: ["#104C2A"] },
    {
        title: "Premium by Marital Status",
        endpoint: "api/v1/premium-by-marital-status/",
        xAxisKey: "customer__marital_status",
        barKey: "average_premium",
        barColors: ["#0C3A1C"],
        transformData: (data) =>
            data.map((item) => ({
                ...item,
                customer__marital_status: item.customer__marital_status ? "Married" : "Single",
            })),
    },
    { title: "Premium by Vehicle Segment", endpoint: "api/v1/premium-by-vehicle-segment/", xAxisKey: "vehicle_segment", barKey: "average_premium", barColors: ["#082D14"] },
];

const DjangoDashboard = () => {
    return (
        <div className="django-dashboard">

            <div className="dashboard-links">
                <a
                    href={import.meta.env.VITE_DJANGO_URL + "swagger-ui"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dashboard-link"
                >
                    Django - Documentation
                </a>
            </div>

            {/* Render the charts */}
            <AreaCharts>
                {chartConfigs.map((config, index) => (
                    <PremiumChart key={index} {...config} />
                ))}
            </AreaCharts>
            
        </div>
    );
};

export default DjangoDashboard;