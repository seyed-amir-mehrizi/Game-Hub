import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


interface FetchResponse<T>{
    count:number;
    results:T[]
}

const useData = <T>(endPoint:string) =>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        let controller = new AbortController();
        apiClient
            .get<FetchResponse<T>>(endPoint, { signal: controller.signal })
            .then(res => setData(res.data.results))
            .catch(err => setError(err.message))
            .finally(() => {
                setIsLoading(false);
            })

        return () => {
            controller.abort();
        }
    }, []);
    return { data, error, isLoading }
}

export default useData;
