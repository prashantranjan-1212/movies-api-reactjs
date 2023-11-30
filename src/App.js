import { Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import Select from "./routes/select";

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
			</Route>
		</Routes>
	);
};

export default App;
