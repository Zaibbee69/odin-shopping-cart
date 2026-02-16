import { useTrendingMovies } from "../hooks/useTrendingMovies";

export default function Home() {
  const { movies, isLoading, isError } = useTrendingMovies();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load movies</p>;

  return (
    <div className="grid grid-cols-5 gap-4">
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}
