import { Quiz } from "../Interfaces/quiz";
import { QuestionList } from "./QuestionList";
import React from "react";

export function QuizSelected({
    selectedTitle,
    quizzes
}: {
    selectedTitle: string;
    quizzes: Quiz[];
}): JSX.Element {
    return (
        <div>
            <h3>You have Selected: {selectedTitle}</h3>
            <QuestionList
                quiz={
                    quizzes[
                        quizzes.map((Quiz) => Quiz.title).indexOf(selectedTitle)
                    ]
                }
            ></QuestionList>
        </div>
    );
}
