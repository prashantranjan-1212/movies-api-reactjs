import React, { Component } from "react";
import "./genreSelect.css";

export default class GenreSelect extends Component {
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
