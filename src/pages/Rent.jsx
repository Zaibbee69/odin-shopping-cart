import MasonryLayout from "../components/MasonryLayout";
import CallToAction from "../components/CallToAction";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { Spinner } from "@radix-ui/themes";

export default function Rent() {
  const { movies, isLoading, isError } = useTopRatedMovies();

  if (isLoading)
    return (
      <p className="text-white text-center py-20">
        <Spinner size="3" />
      </p>
    );

  if (isError)
    return (
      <p className="text-red-500 text-center py-20">Failed to load movies</p>
    );

  return (
    <>
      <MasonryLayout movies={movies} header="Best Sellers" />
      <CallToAction />
    </>
  );
}
