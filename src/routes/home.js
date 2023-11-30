import { Link, Outlet } from "react-router-dom";

import "./home.style.scss";

import AddMovie from "../component/add-movie/add-movie.component";
import EditMovie from "../component/edit-movie/edit-movie.component";
import DeleteMovie from "../component/delete-movie/delete-movie.component";
import MovieList from "../component/movie-list/MovieList.component";

const Home = () => {
	return (
		<div className="App">
			<div className="App-header">
				<div className="header-conatiner">
					<Link
						to="/"
						className="heading"
					>
						<b>netflix</b>roulette
					</Link>
					<div className="movie-control-button">
						<AddMovie />
						<EditMovie />
						<DeleteMovie />
					</div>
				</div>
				<div id="movie-portal" />
				<Outlet />
				<MovieList />
			</div>
		</div>
	);
};

export default Home;
