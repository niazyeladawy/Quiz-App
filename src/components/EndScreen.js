import React, { useState, useContext } from 'react';
import { QuizContext } from '../Context';
import { Questions } from '../QuestionBank';

function EndScreen() {
    const {setGameState, score, setScore } = useContext(QuizContext);

    const endQuiz =()=>{
        setGameState("menu");
        setScore(0);
    }
    
    return (
        <div className="quiz">
            <h2 className="text-center">score {(score / Questions.length * 100).toFixed() }%</h2>
            <button onClick={endQuiz } className="btn btn-primary">Restart</button>
        </div>
    )
}

export default EndScreen
