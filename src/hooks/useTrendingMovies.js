import useSWR from "swr";
import { fetcher } from "./fetcher";
import { generatePriceFromId } from "./generatePriceFromId";
export function useTrendingMovies() {
    const { data, error, isLoading } = useSWR(
        'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
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
