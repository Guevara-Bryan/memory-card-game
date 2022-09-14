import React from "react";
import { GameContext } from "../App";

const ScoreBoard = () => {
    const {maxScore, score} = React.useContext(GameContext);
	return <div>{`Score: ${score||0} i MaxScore: ${maxScore||0}`}</div>;
};

export default ScoreBoard;
 