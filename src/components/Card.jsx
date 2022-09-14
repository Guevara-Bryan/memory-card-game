import React from "react";
import "../styles/Card.css";

import { GameContext } from "../App";

const Card = ({ imgSrc }) => {
	const {
		shuffle,
		score,
		setScore,
		setMaxScore,
		clickedCards,
		setClickedCards,
	} = React.useContext(GameContext);
	return (
		<div
			className="card"
			onClick={() => {
				if (clickedCards.has(imgSrc)) {
					setMaxScore(score);
					setScore(0);
                    setClickedCards(new Set());
				} else {
					setScore((prev) => prev + 1);
					setClickedCards(prev => {
                        const copy = new Set(prev);
                        copy.add(imgSrc);
                        return copy;
                    });
				}
				shuffle();
			}}
		>
			<img className="card-img" src={imgSrc} />
		</div>
	);
};

export default Card;
