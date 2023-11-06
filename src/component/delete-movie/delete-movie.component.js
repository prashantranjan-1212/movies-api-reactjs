import "./delete-movie.style.scss";
import { useState } from "react";
import Dialog from "../dialog/dialog.component";
import MovieForm from "../movie-form/movie-form.component";

const DeleteMovie = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleMovieSubmit = (data) => {
    console.log(data);
    setDialogOpen(false);
  };
  return (
    <div
      className="delete-movie-container"
      data-testid="delete-movie-container"
    >
      <button
        className="delete-movie-button"
        data-testid="delete-movie-button"
        onClick={() => setDialogOpen(true)}
      >
        Delete Movie
      </button>
      {dialogOpen && (
        <Dialog
          title={"Delete Movie"}
          content={"delete Movie"}
          handleCloseButton={() => setDialogOpen(false)}
        >
          <MovieForm onSubmit={handleMovieSubmit}></MovieForm>
        </Dialog>
      )}
    </div>
  );
};

export default DeleteMovie;
