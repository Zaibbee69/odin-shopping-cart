import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useMovie(id) {
    const { data, error, isLoading } = useSWR(
        id
            ? `https://api.themoviedb.org/3/movie/${id}?language=en-US`
            : null,
        fetcher
    );

    return {
        movie: data,
        isLoading,
        isError: error,
    };
}
