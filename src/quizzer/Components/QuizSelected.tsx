import { Quiz } from "../Interfaces/quiz";
import { QuestionList } from "./QuestionList";
import React, { useState } from "react";
import { Question } from "../Interfaces/question";

export function QuizSelected({
    points,
    selectedTitle,
    quizzes,
    selectedQuiz
}: {
    points: number;
    selectedTitle: string;
    quizzes: Quiz[];
    selectedQuiz: Quiz;
}): JSX.Element {
    return (
        <div>
            <h3>You have Selected: {selectedTitle}</h3>
            <h3>Questions:</h3>
            <QuestionList
                points={points}
                questionss={selectedQuiz.questions.map(
                    (question: Question): Question => ({ ...question })
                )}
            ></QuestionList>
        </div>
    ); 
}
