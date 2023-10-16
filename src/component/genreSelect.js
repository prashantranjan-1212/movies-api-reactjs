import React, { Component } from 'react';
import './genreSelect.css';

export default class GenreSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: ["Comedy", "Sci-fi", "Fantasy", "Thriller", "Action", "Documentary"],
            selectedButton: null
        }
    }

  render() {
    return (
        <div>
            <div>
                <input className='genre-search-box'
                        type="search" placeholder="Search Genere" onSelect={(event) => {
                        const selectedGenre = event.target.value.toLocaleLowerCase();
                        this.setState(
                            () => {
                                return {
                                    selectedButton: selectedGenre,
                                }
                            },
                            () => {
                                console.log(this.state.selectedButton)

                            }
                        )
                    }
                }>
                </input>
            </div>
            <div>
            {
                this.state.genres.map((genre) => {
                    return (
                        <button className={genre.toLocaleLowerCase() === this.state.selectedButton ? 'genre-selected-button' : 'genre-search-button'}
                        key={genre}
                        >{genre}</button>
                    )
                })
            }
        </div>
      </div>
    )
  }
}