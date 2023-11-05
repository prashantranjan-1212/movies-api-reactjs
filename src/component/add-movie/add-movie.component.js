import "./add-movie.style.scss";
import { useState } from "react";
import Dialog from "../dialog/dialog.component";
import MovieForm from "../movie-form/movie-form.component";

const AddMovie = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleMovieSubmit = (data) => {
    console.log(data);
    setDialogOpen(false);
  };

  return (
    <div className="add-movie-container">
      <button className="add-movie-button" onClick={() => setDialogOpen(true)}>
        Add Movie
      </button>
      {dialogOpen && (
        <Dialog
          title={"Add Movie"}
          content={"Add Movie"}
          handleCloseButton={() => setDialogOpen(false)}
        >
          <MovieForm onSubmit={handleMovieSubmit}></MovieForm>
        </Dialog>
      )}
    </div>
  );
};

export default AddMovie;
