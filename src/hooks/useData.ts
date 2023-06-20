import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[]
}

const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        let controller = new AbortController();
        apiClient
            .get<FetchResponse<T>>(endPoint, { signal: controller.signal, ...requestConfig })
            .then(res => setData(res.data.results))
            .catch(err => setError(err.message))
            .finally(() => {
                setIsLoading(false);
            })

        return () => {
            controller.abort();
        }
    }, deps ? [...deps] : []);
    return { data, error, isLoading }
}

export default useData;
