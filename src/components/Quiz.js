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

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChoosen) {
            setScore(score + 1);
        }
        setGameState("endscreen");
    }



    return (
        <div className="quiz">
            <h2>{Questions[currentQuestion].prompt}</h2>
            <div className="options">
                <div className="btn-group d-block" role="group" aria-label="Basic radio toggle button group">
                    <div onClick={() => setOptionChoosen("A")}  className="w-100">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                        <label className="btn btn-outline-warning tex-white w-100 mb-3" for="btnradio1">{Questions[currentQuestion].optionA}</label>

                    </div>
                    <div onClick={() => setOptionChoosen("B")}  className="w-100">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label className="btn btn-outline-warning tex-white w-100 mb-3 tex-white" for="btnradio2">{Questions[currentQuestion].optionB}</label>
                    </div>
                    <div onClick={() => setOptionChoosen("C")} className="w-100">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label className="btn btn-outline-warning tex-white w-100 mb-3 tex-white" for="btnradio3">{Questions[currentQuestion].optionC}</label>
                    </div>
                    <div onClick={() => setOptionChoosen("D")} className="w-100">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label className="btn btn-outline-warning tex-white w-100 mb-3 tex-white" for="btnradio4">{Questions[currentQuestion].optionD}</label>
                    </div>
                </div>
                {/* <button onClick={() => setOptionChoosen("A")}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => setOptionChoosen("B")}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => setOptionChoosen("C")}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => setOptionChoosen("D")}>{Questions[currentQuestion].optionD}</button> */}

            </div>

            {
                currentQuestion === Questions.length - 1 ? (
                    <button onClick={finishQuiz} className="btn btn-danger">Finish Quiz</button>
                ) : (
                    <button onClick={nextQuestion} className='btn btn-danger'>next Question</button>
                )
            }

        </div>
    )
}

export default Quiz
