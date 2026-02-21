import GradientText from "./GradientText";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Card, Text, Box, Heading } from "@radix-ui/themes";

export default function MasonryLayout({ movies }) {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-12">
      <GradientText
        className="text-6xl font-extrabold mt-3 mb-5"
        colors={["#9e0031ff", "#faa80fff", "#fffeffff"]}
        duration={8}
      >
        <Heading as="h2" size="8" align={"left"}>
          Hot Releases
        </Heading>
      </GradientText>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3, 1280: 4 }}
      >
        <Masonry gutter="20px">
          {movies.slice(0.15).map((movie) => {
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
                  {/* Image */}
                  <img
                    src={`https://image.tmdb.org/t/p/${size}${imagePath}`}
                    alt={movie.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4 flex items-end justify-between">
                    {/* Movie Title */}
                    <Heading
                      as="p"
                      className="text-white font-inter! font-semibold text-sm md:text-base line-clamp-1"
                    >
                      {movie.title}
                    </Heading>

                    {/* Rent Button */}
                    <Text className="ml-3 bg-[#faa80fff] text-black text-xs font-bold px-3 py-1.5 rounded-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      20$
                    </Text>
                  </div>
                </a>
              </Card>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
