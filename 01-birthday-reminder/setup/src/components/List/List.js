import React from "react";
import Person from "../Person/Person";

const List = ({ people, handleRemovePerson }) => {
	return (
		<>
			{people.map((person) => {
				return <Person person={person} key={person.id} handleRemovePerson={handleRemovePerson} />;
			})}
			;
		</>
	);
};

export default List;
