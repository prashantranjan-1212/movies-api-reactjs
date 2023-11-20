import { useEffect, useState } from "react";

export const useHttp = (url, dependencies) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		console.log(url);
		setIsLoading(true);
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("failed to fetch.....");
				}
				return response.json();
			})
			.then((data) => {
				setIsLoading(false);
				setData(data.data);
			})
			.catch((err) => {
				setIsLoading(false);
				console.log(err);
			});
	}, dependencies);

	return [isLoading, data];
};
