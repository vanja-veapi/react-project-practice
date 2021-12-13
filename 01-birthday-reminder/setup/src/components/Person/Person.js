import React from "react";

const Person = ({ person, handleRemovePerson }) => {
	const { id, name, age, image } = person;

	return (
		<article className="person" onClick={() => handleRemovePerson(id)}>
			<img src={image} alt={name} />
			<div>
				<h4>{name}</h4>
				<p>{age}</p>
			</div>
		</article>
	);
};

export default Person;
