import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { Heading, Text, Button } from "@radix-ui/themes";
import MasonryLayout from "../components/MasonryLayout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const { movies, isLoading, isError } = useTrendingMovies();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (isLoading)
    return <p className="text-white text-center py-20">Loading...</p>;

  if (isError)
    return (
      <p className="text-red-500 text-center py-20">Failed to load movies</p>
    );

  console.log(movies);

  return (
    <>
      <Carousel
        swipeable
        draggable
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        rewindWithAnimation
        removeArrowOnDeviceType={["tablet", "mobile"]}
        centerMode={false}
      >
        {movies.slice(0, 5).map((movie) => {
          if (!movie.backdrop_path) return null;

          return (
            <div key={movie.id} className="relative w-screen h-screen">
              {/* Background Image */}
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

              {/* Left Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 md:px-16 max-w-xl">
                  <Heading
                    size="8"
                    className="text-white font-bold mb-4 leading-tight"
                  >
                    {movie.title}
                  </Heading>

                  <Text size="4" className="text-neutral-300 mb-6 line-clamp-3">
                    {movie.overview}
                  </Text>

                  <Button variant="surface" size="3" radius="large">
                    Rent Now
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <MasonryLayout />
    </>
  );
}
