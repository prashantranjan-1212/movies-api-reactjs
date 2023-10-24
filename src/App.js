import "./App.css";
import Counter from "./component/counter";
import GenreSelect from "./component/genreSelect";
import SearchForm from "./component/searchForm";

function App() {
  const genres = [
    "Comedy",
    "Sci-fi",
    "Fantasy",
    "Thriller",
    "Action",
    "Documentary",
  ];

  return (
    <div className="App">
      <div className="App-header">
        <Counter initialValue={10} />
        <SearchForm searchValue={"search movie"} />
        <GenreSelect genres={genres} />
      </div>
    </div>
  );
}

export default App;
