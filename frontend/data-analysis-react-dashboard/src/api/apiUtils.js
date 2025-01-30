import AxiosInstance, { setBaseURL } from './axiosInstance';

export const fetchData = async (baseURL, endpoint) => {
    try {
        setBaseURL(baseURL);
        const response = await AxiosInstance.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};