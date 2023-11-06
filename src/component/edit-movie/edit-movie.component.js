import "./edit-movie.style.scss";
import { useState } from "react";
import Dialog from "../dialog/dialog.component";
import MovieForm from "../movie-form/movie-form.component";

const EditMovie = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleMovieSubmit = (data) => {
    console.log(data);
    setDialogOpen(false);
  };

  return (
    <div className="edit-movie-container" data-testid="edit-movie-container">
      <button
        className="edit-movie-button"
        data-testid="edit-movie-button"
        onClick={() => setDialogOpen(true)}
      >
        Edit Movie
      </button>
      {dialogOpen && (
        <Dialog
          title={"Edit Movie"}
          content={"Edit Movie"}
          handleCloseButton={() => setDialogOpen(false)}
        >
          <MovieForm onSubmit={handleMovieSubmit}></MovieForm>
        </Dialog>
      )}
    </div>
  );
};

export default EditMovie;
