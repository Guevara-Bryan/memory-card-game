import React from "react";

import "../styles/GameOver.css";
import { GameContext } from "../App";

const GameOver = () => {
	const {
		playerDidWin,
		gameIsOver,
		setGameIsOver,
		setPlayerDidWin,
		setClickedCards,
		setScore,
		setMaxScore,
		maxScore,
		score,
	} = React.useContext(GameContext);
	return (
		<div className={gameIsOver ? "curtain" : "hidden"}>
			<div className="game-over__container">
				<div className="game-over__message">
					{playerDidWin ? "Congratulations. You won!" : "Game Over"}
				</div>
				<button
					className="game-over__button"
					onClick={() => {
						setMaxScore(score > maxScore ? score : maxScore);
						setScore(0);
						setClickedCards(new Set());
						setGameIsOver(false);
						setPlayerDidWin(false);
					}}
				>
					Restart
				</button>
			</div>
		</div>
	);
};

export default GameOver;
