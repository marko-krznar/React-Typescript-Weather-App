import axios from "axios";
import { useState, useEffect } from "react";

export const apiKey = "bfd14f25f12b27477818a553e86af0d4";

axios.defaults.baseURL = "https://api.openweathermap.org/";

export const useAxios = (axiosParams: any) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchData = async (params: any) => {
        try {
            const result = await axios.request(params);
            setResponse(result.data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []);

    return { response, error, loading };
};
