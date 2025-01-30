import React, { useEffect, useState, useContext } from "react";
import AreaLineChart from "../common/AreaLineChart";
import { ThemeContext } from "../../../context/ThemeContext";
import { fetchData } from "../../../api/apiUtils";

const PurchaseTrendsChart = ({ title, endpoint, dataKey, nameKey, lineColor, gridColumn }) => {
    const { theme } = useContext(ThemeContext);
    const [data, setData] = useState(null);

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
                const fetchedData = await fetchData(import.meta.env.VITE_SPRINGBOOT_URL, endpoint);
                setData(fetchedData);
                localStorage.setItem(cacheKey, JSON.stringify(fetchedData));
                localStorage.setItem(`${cacheKey}Timestamp`, Date.now().toString());
            }
        };

        getData();
    }, [endpoint, title]);

    return (
        <div style={{ gridColumn }}>
            <AreaLineChart
                title={title}
                data={data}
                dataKey={dataKey}
                nameKey={nameKey}
                theme={theme}
                lineColor={lineColor}
            />
        </div>
    );
};

export default PurchaseTrendsChart;