import { useTrendingMovies } from "../hooks/useTrendingMovies";
import MasonryLayout from "../components/MasonryLayout";

export default function Home() {
  const { movies, isLoading, isError } = useTrendingMovies();

  if (isLoading)
    return <p className="text-white text-center py-20">Loading...</p>;

  if (isError)
    return (
      <p className="text-red-500 text-center py-20">Failed to load movies</p>
    );

  console.log(movies);

  return <MasonryLayout />;
}
