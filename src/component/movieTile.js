const MovieTile = ({
  imageUrl,
  movieName,
  releaseYear,
  genres,
  onMovieClick,
}) => {
  return (
    <div className="movie-tile">
      <img src={imageUrl} alt={movieName} />
      <h2>{movieName}</h2>
      <p>Release Year: {releaseYear}</p>
      <p>genres: {genres.join(", ")}</p>
      <button onClick={() => onMovieClick(movieName)}>View Details</button>
    </div>
  );
};

export default MovieTile;
