import { Link, Outlet } from "react-router-dom";

import "./home.style.scss";

import AddMovie from "../../component/add-movie/add-movie.component";
import MovieList from "../../component/movie-list/MovieList.component";

const Home = () => {
	return (
		<>
			<div className="header-conatiner">
				<Link
					to="/"
					className="heading"
				>
					<b>netflix</b>roulette
				</Link>
				<div className="movie-control-button">
					<AddMovie />
				</div>
			</div>
			<Outlet />
			<MovieList />
		</>
	);
};

export default Home;