import { useEffect, useState } from "react";

export const useHttp = (url, dependencies) => {
	const [fetchedData, setFetchedData] = useState([]);

	useEffect(() => {
		console.log(url);
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("failed to fetch.....");
				}
				return response.json();
			})
			.then((data) => {
				setFetchedData(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, dependencies);

	return [fetchedData];
};
