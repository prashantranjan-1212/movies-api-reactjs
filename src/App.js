import { Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import Select from "./routes/select";
import EditMovie from "./routes/editMovie";
import AddMovie from "./routes/addMovie";
import DeleteMovie from "./routes/deleteMovie";

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			>
				<Route
					path="/:movieId"
					element={<Select />}
				/>
				<Route
					path="/new"
					element={<AddMovie />}
				/>
				<Route
					path="/:movieId/edit"
					element={<EditMovie />}
				/>
				<Route
					path="/:movieId/delete"
					element={<DeleteMovie />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
