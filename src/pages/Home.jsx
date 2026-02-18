import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { Card, Box, Heading, Text, Container } from "@radix-ui/themes";
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
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      renderDotsOutside={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      centerMode={true}
      keyBoardControl={true}
      rewindWithAnimation={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {movies.map((movie) => {
        const isWide = movie.id % 10 < 3;
        const imagePath = isWide ? movie.backdrop_path : movie.poster_path;
        const size = isWide ? "w780" : "w342";

        if (!imagePath) return null;

        return (
          <Card
            key={movie.id}
            asChild
            className="group overflow-hidden bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-black/40"
          >
            <a href="#" className="block relative">
              <img
                src={`https://image.tmdb.org/t/p/${size}${imagePath}`}
                alt={movie.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <Box className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <Box className="absolute bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heading
                  as="p"
                  className="text-white font-semibold text-sm md:text-base"
                >
                  {movie.title}
                </Heading>
              </Box>
              <Box>
                <Text>Ratings: {movie.vote_average}</Text>
              </Box>
            </a>
          </Card>
        );
      })}
    </Carousel>
  );
}
