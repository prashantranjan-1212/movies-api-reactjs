import "./movie-form.style.css";

const MovieForm = ({
  id,
  imageUrl,
  movieName,
  releaseDate,
  genres,
  rating,
  duration,
  description,
}) => {
  return (
    <div className="movie-form-conatiner">
      <form>
        <button>Add Movie</button>
        <button>Edit Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;
