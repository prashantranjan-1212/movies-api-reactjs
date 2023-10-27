import { Component } from "react";
import "./App.css";
import Counter from "./component/counter";
import GenreSelect from "./component/genreSelect";
import SearchForm from "./component/searchForm";

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedGenre: null,
    };
  }

  genres = ["Comedy", "Sci-fi", "Fantasy", "Thriller", "Action", "Documentary"];

  genreSelectHandler = (genre) => {
    this.setState(() => {
      return { selectedGenre: genre };
    });
  };

  render() {
    const { genreSelectHandler, genres } = this;
    const { selectedGenre } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <Counter initialValue={10} />
          <SearchForm searchValue={"search movie"} />
          <GenreSelect
            genres={genres}
            selectedGenre={selectedGenre}
            onSelect={genreSelectHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
