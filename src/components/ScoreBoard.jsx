import React from "react";
import { GameContext } from "../App";

import "../styles/App.css";

const ScoreBoard = () => {
    const {maxScore, score, shuffle} = React.useContext(GameContext);
	return (
        <div className="score-board">
            <div>{`Score: ${score||0} i MaxScore: ${maxScore||0}`}</div>
            <button className="reshuffle-button" onClick={shuffle}>Reshuffle</button>
        </div>
    );
};

export default ScoreBoard;
 