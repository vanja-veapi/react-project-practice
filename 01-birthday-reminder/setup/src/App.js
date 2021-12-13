import React, { useState } from "react";
import data from "./utils/data";
import List from "./components/List/List";
function App() {
	const [people, setPeople] = useState(data);

	const handleRemovePerson = (id) => {
		const newList = people.filter((person) => person.id !== id);
		setPeople(newList);
	};

	return (
		<main>
			<section className="container">
				<h3>
					{people.length}
					{people.length > 1 ? " birthdays" : " birthday"} today
				</h3>
				<List people={people} handleRemovePerson={handleRemovePerson} />
				<button onClick={() => setPeople([])}>Clear All</button>
			</section>
		</main>
	);
}

export default App;
