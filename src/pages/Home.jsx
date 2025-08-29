import data from "../../db.json";
import MovieCard from "../components/MovieCard";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {data.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
