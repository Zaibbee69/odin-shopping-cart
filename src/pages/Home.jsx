import { useTrendingMovies } from "../hooks/useTrendingMovies";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Card, Inset, Text } from "@radix-ui/themes";

export default function Home() {
  const { movies, isLoading, isError } = useTrendingMovies();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load movies</p>;

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
    >
      <Masonry columnsCount={5} gutter="12px">
        {movies.map((movie, index) => {
          const isWide = index % 3 === 0;

          const imagePath = isWide ? movie.backdrop_path : movie.poster_path;

          const size = isWide ? "w780" : "w342";

          return (
            <Card key={movie.id} asChild>
              <a href="#">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src={`https://image.tmdb.org/t/p/${size}${imagePath}`}
                    alt={movie.title}
                    className="w-full rounded-lg"
                    // style={{
                    //   display: "block",
                    //   objectFit: "cover",
                    //   width: "100%",
                    //   height: 140,
                    //   backgroundColor: "var(--gray-5)",
                    // }}
                  />
                </Inset>
                <Text as="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, nisi corporis sit quod minus natus aut debitis
                  necessitatibus accusamus rem hic fuga libero tempora nobis
                  consequuntur atque blanditiis? Veniam, obcaecati!
                </Text>
              </a>
            </Card>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}
