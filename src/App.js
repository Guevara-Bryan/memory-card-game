import "./styles/App.css";
import React from "react";
import CardHolder from "./components/CardHolder";
import ScoreBoard from "./components/ScoreBoard";
import GameOver from "./components/GameOver";

import dipper from "./images/characters/dipper.webp";
import gideon from "./images/characters/gideon.png";
import mabel from "./images/characters/mabel.png";
import robbie from "./images/characters/robbie.png";
import soos from "./images/characters/soos.png";
import stan from "./images/characters/stan.png";
import toby from "./images/characters/toby.png";
import waddles from "./images/characters/waddles.png";
import wendy from "./images/characters/wendy.png";
import cypher from "./images/characters/cypher.png";

export const GameContext = React.createContext();
const cards = [
	dipper,
	gideon,
	cypher,
	mabel,
	robbie,
	soos,
	stan,
	toby,
	waddles,
	wendy,
];
const CELL_NUMS = 6;
function App() {
	const [gameCards, setGameCards] = React.useState([]);
	const [clickedCards, setClickedCards] = React.useState(new Set());
	const [maxScore, setMaxScore] = React.useState(0);
	const [score, setScore] = React.useState(0);
	const [playerDidWin, setPlayerDidWin] = React.useState(false);
	const [gameIsOver, setGameIsOver] = React.useState(false);

	const shuffle = () => {
		setGameCards(cards.sort(()=> 0.5 - Math.random()).slice(0,6));
	};

	React.useEffect(() => {
		if (!gameIsOver) {
			shuffle();
			if(score === cards.length){
				setGameIsOver(true);
				setPlayerDidWin(true);
			}
		}
	}, [score]);

	return (
		<GameContext.Provider
			value={{
				gameCards,
				shuffle,
				clickedCards,
				setClickedCards,
				maxScore,
				setMaxScore,
				score,
				setScore,
				setPlayerDidWin,
				playerDidWin,
				setGameIsOver,
				gameIsOver,
				totalCards: cards.length,
			}}
		>
			<div className="container">
				<ScoreBoard />
				<CardHolder />
				<GameOver />
			</div>
		</GameContext.Provider>
	);
}

export default App;
