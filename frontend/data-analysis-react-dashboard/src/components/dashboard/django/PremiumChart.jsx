import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import BarChart from "../common/AreaBarChart";
import { fetchData } from "../../../api/apiUtils";

const PremiumChart = ({ title, endpoint, xAxisKey, barKey, barColors, transformData }) => {
    const { theme } = useContext(ThemeContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const cacheKey = title.replace(/\s+/g, "").toLowerCase();
            const cachedData = localStorage.getItem(cacheKey);
            const cacheTimestamp = localStorage.getItem(`${cacheKey}Timestamp`);

            if (cachedData && cacheTimestamp && Date.now() - cacheTimestamp < 3600000) {
                console.log(`Using cached data for ${title}`);
                setData(JSON.parse(cachedData));
            } else {
                console.log(`Fetching new data for ${title}`);
                const fetchedData = await fetchData(import.meta.env.VITE_DJANGO_URL, endpoint);
                const finalData = transformData ? transformData(fetchedData) : fetchedData;
                setData(finalData);
                localStorage.setItem(cacheKey, JSON.stringify(finalData));
                localStorage.setItem(`${cacheKey}Timestamp`, Date.now().toString());
            }
        };

        getData();
    }, [endpoint, title, transformData]);

    return (
        <BarChart
            title={title}
            data={data}
            xAxisKey={xAxisKey}
            barKey={barKey}
            theme={theme}
            barColors={barColors}
        />
    );
};

export default PremiumChart;