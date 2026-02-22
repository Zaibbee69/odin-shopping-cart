import { useParams } from "react-router";
import { useMovie } from "../hooks/useMovie";
import { Spinner } from "@radix-ui/themes";
import {
  Card,
  Box,
  Heading,
  Text,
  Flex,
  Badge,
  Button,
} from "@radix-ui/themes";
import { Flame, CircleDollarSign } from "lucide-react";

const formatRuntime = (minutes) => {
  if (!minutes) return "";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
};

export default function MovieDetail() {
  const { id } = useParams();
  const { movie, isLoading, isError } = useMovie(id);

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

  console.log(movie);

  return (
    <>
      <Box className="relative w-full h-screen overflow-hidden">
        {/* Backdrop Image */}
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

        {/* Content (Top Left) */}
        <Flex
          direction="column"
          gap="3"
          className="absolute top-20 left-10 z-10 max-w-2xl"
        >
          <Heading size="9" className="text-white drop-shadow-lg">
            {movie.title}
          </Heading>

          <Flex gap="4" className="text-white/80 text-sm md:text-base">
            <Text>⏱ {formatRuntime(movie.runtime)}</Text>

            <Text>⭐ {movie.vote_average?.toFixed(1)}</Text>
          </Flex>
        </Flex>
        {/* Price Tag (Bottom Right) */}
        <Box className="absolute bottom-10 right-10 z-10">
          <div className="bg-[var(--color-brand-frost)] text-black font-bold text-lg px-6 py-3 rounded-xl shadow-2xl">
            $20
          </div>
        </Box>
      </Box>
      <Heading as="h3" size="9" className="mt-6! mb-6! p-4! line-clamp-1!">
        <Flex align="center" justify="center" gap="2">
          {movie.tagline}
          <Flame size={64} color="#faa80fff" />
        </Flex>
      </Heading>

      {/* Info */}
      <Flex gap={"3"} align={"center"} justify={"center"}>
        <Box size="2" className="p-4!">
          <Card className="bg-[var(--color-brand-space)] border border-white/10 rounded-2xl p-10 shadow-2xl shadow-black/40">
            <Flex direction="column" gap="6">
              <Box maxWidth={"255px"}>
                <Heading size="6" className="text-brand-red mb-3">
                  Overview
                </Heading>

                <Text size="3" className="text-white/80 leading-relaxed">
                  {movie.overview}
                </Text>
              </Box>

              {/* Genres */}
              <Box>
                <Heading size="6" className="text-brand-frost! mb-3">
                  Genres
                </Heading>

                <Flex wrap="wrap" gap="3">
                  {movie.genres?.map((genre) => (
                    <Badge
                      key={genre.id}
                      className="bg-brand-frost! text-black! font-semibold! px-3! py-1! rounded-md!"
                    >
                      {genre.name}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Card>
        </Box>
        <Button size="4" radius="large">
          <CircleDollarSign /> Rent Now
        </Button>
      </Flex>
    </>
  );
}
