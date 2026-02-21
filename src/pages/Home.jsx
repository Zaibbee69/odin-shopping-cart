import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { Spinner } from "@radix-ui/themes";
import CarouselImg from "../components/CarouselImg";
import MasonryLayout from "../components/MasonryLayout";
import CallToAction from "../components/CallToAction";

export default function Home() {
  const { movies, isLoading, isError } = useTrendingMovies();

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

  console.log(movies);

  return (
    <>
      <CarouselImg movies={movies} />
      <MasonryLayout movies={movies} />
      <CallToAction />
    </>
  );
}
