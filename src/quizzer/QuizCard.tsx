import React from "react";
import { Quiz } from "../interfaces/quiz";

import "./QuizCard.css";
import { Question } from "../interfaces/question";

interface Props {
    quiz: Quiz;
    handleClick: (id: number) => void;
}

export const QuizCard = ({ quiz, handleClick }: Props) => {
    const filteredQuestions = quiz.questionList.filter(
        (q: Question): boolean =>
            (quiz.published && q.published) || !quiz.published
    );

    return (
        <div className="quiz_view_card">
            <div className="d-flex align-items-baseline">
                <h3
                    className="title"
                    onClick={() => {
                        handleClick(quiz.id);
                    }}
                >
                    {quiz.title}
                </h3>
                <p>
                    {filteredQuestions.length} question
                    {filteredQuestions.length !== 1 ? "s" : ""}
                </p>
            </div>
            <p>{quiz.body}</p>
        </div>
    );
};
