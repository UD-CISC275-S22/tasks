import { Quiz } from "../Interfaces/quiz";
import { QuestionList } from "./QuestionList";
//import React, { useState } from "react";
import { Question } from "../Interfaces/question";
import React from "react";

export function QuizSelected({
    selectedTitle,
    selectedQuiz
}: {
    selectedTitle: string;
    selectedQuiz: Quiz;
}): JSX.Element {
    return (
        <div>
            <h3>You have Selected: {selectedTitle}</h3>
            <h3>Questions: </h3>
            <QuestionList
                questionss={selectedQuiz.questions.map(
                    (question: Question): Question => ({ ...question })
                )}
            ></QuestionList>
        </div>
    );
}
