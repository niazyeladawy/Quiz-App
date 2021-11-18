import React, { useState } from 'react'
import { QuizContext } from '../../Context';
import EndScreen from '../EndScreen';
import MainMenu from '../MainMenu';
import Quiz from '../Quiz';


export default function Home(props) {

    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);

    return (
        <div className="home">
            <h1 className="text-center">Quiz App</h1>
            <QuizContext.Provider value={{gameState,setGameState, score, setScore}}>
                {gameState === "menu" && <MainMenu/>}
                {gameState === "quiz" && <Quiz/>}
                {gameState === "endscreen" && <EndScreen/>}
            </QuizContext.Provider>
        </div>
    )
}
