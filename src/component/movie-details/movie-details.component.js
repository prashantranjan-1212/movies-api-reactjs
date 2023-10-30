import "./movie-details.style.css";

const MovieDetails = (
  imageUrl,
  movieName,
  releaseYear,
  rating,
  duration,
  description
) => {
  return (
    <div movie-details>
      <div movie-poster>
        <img src={imageUrl} alt={movieName} />
      </div>
      <div movie-info>
        <h2>{movieName}</h2>
        <p>Release Year : {releaseYear}</p>
        <p>Rating : {rating}</p>
        <p>Duartion : {duration}</p>
        <p>Description : {description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
