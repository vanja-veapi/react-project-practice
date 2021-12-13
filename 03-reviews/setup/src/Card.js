import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Card = ({ people }) => {
	return (
		<article className="review">
			<div className="img-container">
				<img src={people.image} alt={people.name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{people.name}</h4>
			<p className="job">{people.job}</p>
			<p className="info">{people.text}</p>
			<div className="button-container">
				<button className="prev-btn">
					{/* onClick={prevPerson} */}
					<FaChevronLeft />
				</button>
				<button className="next-btn">
					{/* onClick={nextPerson} */}
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn">
				{/* onClick={randomPerson} */}
				surprise me
			</button>
		</article>
	);
};

export default Card;
