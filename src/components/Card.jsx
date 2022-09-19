import React from "react";
import "../styles/Card.css";

import { GameContext } from "../App";

const Card = ({ imgSrc }) => {
	const {
		setScore,
		score,
		clickedCards,
		setClickedCards,
		setGameIsOver,
		totalCards,
		setPlayerDidWin,
	} = React.useContext(GameContext);
	return (
		<div
			className="card"
			onClick={() => {
				if (clickedCards.has(imgSrc)) {
					setGameIsOver(true);
					setPlayerDidWin(false);
				} else {
					setScore((prev) => prev + 1);
					setClickedCards((prev) => {
						const copy = new Set(prev);
						copy.add(imgSrc);
						return copy;
					});
				}
			}}
		>
			<img className="card-img" src={imgSrc} alt="character card" />
		</div>
	);
};

export default Card;
