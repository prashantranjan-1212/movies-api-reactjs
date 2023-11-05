import { useState } from "react";
import "./movie-form.style.scss";
import PropTypes from "prop-types";

const MovieForm = ({ movieInfo, onSubmit }) => {
  const [title, setTitle] = useState(movieInfo.title || "");
  const [releaseDate, setReleaseDate] = useState(movieInfo.releaseDate || "");
  const [movieUrl, setMovieUrl] = useState(movieInfo.movieUrl || "");
  const [rating, setRating] = useState(movieInfo.rating || "");
  const [genre, setGenre] = useState(movieInfo.genre || "");
  const [runtime, setRuntime] = useState(movieInfo.runtime || "");
  const [overview, setOverview] = useState(movieInfo.overview || "");

  const handleMovieSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    onSubmit(formData);
  };

  return (
    <div className="movie-form-conatiner">
      <form onSubmit={handleMovieSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Movie Title "
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label>Release Date</label>
        <input
          type="date"
          name="releaseDate"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        ></input>
        <label>Movie Url</label>
        <input
          type="url"
          name="movieUrl"
          value={movieUrl}
          onChange={(event) => setMovieUrl(event.target.value)}
        ></input>
        <label>Rating</label>
        <input
          type="number"
          name="rating"
          min="0"
          max="10"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        ></input>
        <label>Genre</label>
        <select
          value={genre}
          name="genre"
          onChange={(event) => setGenre(event.target.value)}
        >
          <option value="Comedy">Comedy</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Thriller">Thriller</option>
          <option value="Action">Action</option>
          <option value="Documentary">Documentary</option>
          <option value="Adventure">Adventure</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <label>Runtime</label>
        <input
          type="text"
          name="runtime"
          value={runtime}
          onChange={(event) => setRuntime(event.target.value)}
        ></input>
        <label>Overview</label>
        <textarea
          value={overview}
          name="overview"
          onChange={(event) => setOverview(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default MovieForm;

MovieForm.propTypes = {
  movieInfo: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

MovieForm.defaultProps = {
  movieInfo: {},
  onSubmit: () => {},
};
