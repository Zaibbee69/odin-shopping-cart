import useSWR from "swr";
import { fetcher } from "./fetcher";
import { generatePriceFromId } from "./generatePriceFromId";

export function useMovie(id) {
    const { data, error, isLoading } = useSWR(
        id
            ? `https://api.themoviedb.org/3/movie/${id}?language=en-US`
            : null,
        fetcher
    );

    const movieWithPrice = data
        ? {
            ...data,
            price: generatePriceFromId(data.id),
        }
        : undefined;

    return {
        movie: movieWithPrice,
        isLoading,
        isError: error,
    };
}
