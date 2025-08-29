import data from "../../db.json";

export default function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {data.directors.map((director) => (
        <div key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
