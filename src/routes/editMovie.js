import { Outlet, useParams } from "react-router-dom";

const EditMovie = () => {
	const { movieId } = useParams();
	return (
		<>
			{console.log(`Edit movie with id ---> ${movieId}`)}
			<div id="movie-portal" />
			<Outlet />
		</>
	);
};

export default EditMovie;
