import React, { useContext } from 'react';
import { QuizContext } from '../Context';


function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContext);
     
    return (
        <div className="menu">
            <button className="btn btn-warning position-absolute start__btn shadow" onClick={()=> {setGameState("quiz")}}>Start Quiz</button>
        </div>
    )
}

export default MainMenu
