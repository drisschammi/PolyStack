import axios from 'axios';

let baseURL = 'http://localhost:8000/'; // Default URL

const AxiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    }
});

// Function to dynamically update the base URL
export const setBaseURL = (url) => {
    AxiosInstance.defaults.baseURL = url;
};

export default AxiosInstance;