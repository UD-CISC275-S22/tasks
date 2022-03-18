import React, { useState } from "react";
import quizzer from "./quiz.json";
import { QuizList } from "./QuizList";
import { Quiz } from "./Quiz";
import { Button } from "react-bootstrap";

const QUIZZES = quizzer.map((quiz): Quiz => ({ ...quiz }));

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizes] = useState<Quiz[]>(QUIZZES);
    return (
        <div>
            <QuizList quiz={quizzes}></QuizList>
        </div>
    );
}
