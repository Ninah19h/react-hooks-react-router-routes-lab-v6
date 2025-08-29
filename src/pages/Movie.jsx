import { useParams } from "react-router-dom";
import data from "../../db.json";

export default function Movie() {
  const { id } = useParams();
  const movie = data.movies.find((movie) => movie.id === parseInt(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time} min</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
}
