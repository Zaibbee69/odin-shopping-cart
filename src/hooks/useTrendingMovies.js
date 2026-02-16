import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useTrendingMovies() {
    const { data, error, isLoading } = useSWR(
        'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
        fetcher
    );

    return {
        movies: data?.results,
        isLoading,
        isError: error,
    };
}
