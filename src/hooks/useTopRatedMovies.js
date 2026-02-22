import useSWR from "swr";
import { fetcher } from "./fetcher";
import { generatePriceFromId } from "./generatePriceFromId";

export function useTopRatedMovies() {
    const { data, error, isLoading } = useSWR(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        fetcher
    );
    const moviesWithPrices = data?.results?.map((movie) => ({
        ...movie,
        price: generatePriceFromId(movie.id),
    }));

    return {
        movies: moviesWithPrices,
        isLoading,
        isError: error,
    };
}
