import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const fetchTours = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();

			setTours(tours);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	const removeTour = (id) => {
		const removedTour = tours.filter((tour) => tour.id !== id);
		setTours(removedTour);
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}
	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h1>No tours left</h1>
					<button className="btn" onClick={fetchTours}>
						Refresh
					</button>
				</div>
			</main>
		);
	}
	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
}

export default App;
