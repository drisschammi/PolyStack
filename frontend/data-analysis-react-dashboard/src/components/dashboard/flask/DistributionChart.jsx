import React, { useEffect, useState } from "react";
import AreaPieChart from "../common/AreaPieChart";
import { fetchData } from "../../../api/apiUtils";

const DistributionChart = ({ title, endpoint, dataKey, nameKey, pieColors }) => {
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
                const fetchedData = await fetchData(import.meta.env.VITE_FLASK_URL, endpoint);
                setData(fetchedData);
                localStorage.setItem(cacheKey, JSON.stringify(fetchedData));
                localStorage.setItem(`${cacheKey}Timestamp`, Date.now().toString());
            }
        };

        getData();
    }, [endpoint, title]);

    return (
        <AreaPieChart
            title={title}
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            pieColors={pieColors}
        />
    );
};

export default DistributionChart;