import React, { useState } from "react";
import quizzes from "./Data/quizes.json";
import { Quiz } from "./Interfaces/quiz";

const QUIZZES = quizzes.map((quiz): Quiz => ({ ...quiz }));

//const QUIZZES = quizzes.map((quiz): Quiz => ({ ...quiz }));
export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);

    function editQuiz(title: string, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map(
                (quiz: Quiz): Quiz => (quiz.title === title ? newQuiz : quiz)
            )
        );
    }

    function deleteQuiz(title: string) {
        setQuizzes(
            quizzes.filter((quiz: Quiz): boolean => quiz.title !== title)
        );
    }
    return <h3>Quizzer</h3>;
}
