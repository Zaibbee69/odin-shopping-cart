import useSWR from "swr";
import { fetcher } from "./fetcher";

export function usePopularMovies() {
    const { data, error, isLoading } = useSWR("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", fetcher)

    return {
        movies: data?.results,
        isLoading,
        isError: error,
    };
}