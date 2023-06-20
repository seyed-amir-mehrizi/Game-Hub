import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
    id:number;
    name:string
}

interface FetchGenresResponse{
    count:number;
    results:Genre[]
}

const useGenre = () =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        let controller = new AbortController();
        apiClient
            .get<FetchGenresResponse>('/genres', { signal: controller.signal })
            .then(res => setGenres(res.data.results))
            .catch(err => setError(err.message))
            .finally(() => {
                setIsLoading(false);
            })

        return () => {
            controller.abort();
        }
    }, []);
    return { genres, error, isLoading }
}

export default useGenre;
