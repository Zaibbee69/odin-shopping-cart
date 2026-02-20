import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Card, Text, Box, Heading } from "@radix-ui/themes";

export default function MasonryLayout({ movies }) {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-12">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3, 1280: 4 }}
      >
        <Masonry gutter="20px">
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
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
