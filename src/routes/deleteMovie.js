import { Outlet, useParams } from "react-router-dom";

const DeleteMovie = () => {
	const { movieId } = useParams();
	return (
		<>
			{console.log(`Delete movie with id --> ${movieId}`)}
			<div id="movie-portal" />
			<Outlet />
		</>
	);
};
export default DeleteMovie;
