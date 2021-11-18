import React, { useState, useContext } from 'react';
import { QuizContext } from '../Context';
import { Questions } from '../QuestionBank';
import './Quiz.css'


function Quiz() {

    const { gameState, setGameState, score, setScore } = useContext(QuizContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [optionChoosen, setOptionChoosen] = useState("");



    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChoosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    const finishQuiz = ()=>{
        if (Questions[currentQuestion].answer === optionChoosen) {
            setScore(score + 1);
        }
        setGameState("endscreen");
    }

    

    return (
        <div className="quiz">
            <h2>{Questions[currentQuestion].prompt}</h2>
            <div className="options">
                <button  onClick={() => setOptionChoosen("A")}>{Questions[currentQuestion].optionA}</button>
                <button  onClick={() => setOptionChoosen("B")}>{Questions[currentQuestion].optionB}</button>
                <button  onClick={() => setOptionChoosen("C")}>{Questions[currentQuestion].optionC}</button>
                <button  onClick={() => setOptionChoosen("D")}>{Questions[currentQuestion].optionD}</button>
                
            </div>

            {
                currentQuestion === Questions.length - 1 ? (
                    <button onClick={finishQuiz}>Finish Quiz</button>
                ) : (
                    <button onClick={nextQuestion} className='btn btn-danger'>next Question</button>
                )
            }

        </div>
    )
}

export default Quiz
