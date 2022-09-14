import React from "react";
import Card from "./Card";

import { GameContext } from "../App";
import { nanoid } from "nanoid";

import "../styles/CardHolder.css";

const CardHolder = () => {
	const {gameCards} = React.useContext(GameContext);
	return (
		<div className="board">
			{gameCards.map((card) => {
				return <Card key={nanoid()} imgSrc={card} />;
			})}
		</div>
	);
};

export default CardHolder;
