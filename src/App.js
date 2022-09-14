import "./styles/App.css";
import React from "react";
import CardHolder from "./components/CardHolder";
import ScoreBoard from "./components/ScoreBoard";

import dipper from "./images/characters/dipper.webp";
import gideon from "./images/characters/gideon.png";
import mabel from "./images/characters/mabel.png";
import robbie from "./images/characters/robbie.png";
import soos from "./images/characters/soos.png";
import stan from "./images/characters/stan.png";
import toby from "./images/characters/toby.png";
import waddles from "./images/characters/waddles.png";
import wendy from "./images/characters/wendy.png";


export const GameContext = React.createContext();
const cards = [dipper, gideon, mabel, robbie, soos, stan, toby, waddles, wendy];
function App() {
	const [gameCards, setGameCards] = React.useState([]);
	const [clickedCards, setClickedCards] = React.useState(new Set());
	const [maxScore, setMaxScore] = React.useState(0);
	const [score, setScore] = React.useState(0);

	const shuffle = () => {
		if (clickedCards.size === cards.length){ return; }
		const res = [];
		let i = Math.floor(Math.random() * (cards.length - 0) + 0);
		while(true){
			if(!clickedCards.has(cards[i])){
				res.push(cards[i]);
				break;
			}
			i = (i + 1) % cards.length;
			console.log(`searching ${i}`);
		}

		while (res.length < 6){
			i = (i + 1) % cards.length;
			res.push(cards[i])
		}
		console.log([res.length, clickedCards.size]);
		setGameCards(res);
	};

	React.useEffect(() => {
		shuffle();
		console.log("using");
	}, []);

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
				totalCards: cards.length,
			}}
		>
			<div className="container">
				<ScoreBoard />
				<CardHolder />
			</div>
		</GameContext.Provider>
	);
}

export default App;
