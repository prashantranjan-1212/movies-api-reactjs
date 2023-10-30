import React, { Component } from "react";
import "./genre-select.style.css";

class GenreSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { genres, selectedGenre, onSelect } = this.props;
    return (
      <>
        {genres.map((genre, index) => {
          return (
            <button
              key={index}
              data-testid={genre}
              onClick={() => onSelect(genre)}
              style={{
                backgroundColor:
                  genre === selectedGenre ? "DodgerBlue" : "white",
              }}
              className="genre-selected-button"
            >
              {genre}
            </button>
          );
        })}
      </>
    );
  }
}

export default GenreSelect;
