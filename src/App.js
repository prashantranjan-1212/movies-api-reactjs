import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Select from "./routes/getMovie/select";
import EditMovie from "./routes/editMovie/editMovie";
import AddMovie from "./routes/addMovie/addMovie";
import DeleteMovie from "./routes/deleteMovie/deleteMovie";

const App = () => {
	return (
		<div className="App">
			<div className="App-header">
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
			</div>
		</div>
	);
};

export default App;
