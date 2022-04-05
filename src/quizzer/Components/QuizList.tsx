import React from "react";
import { Quiz } from "../Interfaces/quiz";
import { Stack } from "react-bootstrap";
import { QuizView } from "./QuizView";

export function QuizList({
    quizzes,
    deleteQuiz,
    editQuiz
}: {
    quizzes: Quiz[];
    deleteQuiz: (id: number) => void;
    editQuiz: (id: number, newQuiz: Quiz) => void;
}): JSX.Element {
    return (
        <Stack gap={1}>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.id} className="bg-light border m-2 p-2">
                    <QuizView
                        quiz={quiz}
                        deleteQuiz={deleteQuiz}
                        editQuiz={editQuiz}
                    ></QuizView>
                </div>
            ))}
        </Stack>
    );
}
