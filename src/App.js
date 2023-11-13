import "./App.scss";
import AddMovie from "./component/add-movie/add-movie.component";
import EditMovie from "./component/edit-movie/edit-movie.component";
import DeleteMovie from "./component/delete-movie/delete-movie.component";
import MovieList from "./component/movie-list/MovieList.component";

const App = () => {
	return (
		<div className="App">
			<div className="App-header">
				<div className="movie-control-button">
					<AddMovie />
					<EditMovie />
					<DeleteMovie />
				</div>
				<div id="movie-portal" />
				<MovieList />
			</div>
		</div>
	);
};

export default App;
