import { Outlet } from "react-router-dom";

const AddMovie = () => {
	return (
		<>
			{console.log("Add movie form ")}
			<Outlet />
			<div id="movie-portal" />
			<Outlet />
		</>
	);
};

export default AddMovie;
