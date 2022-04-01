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
    deleteQuiz: (title: string) => void;
    editQuiz: (title: string, newQuiz: Quiz) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.title} className="bg-light border m-2 p-2">
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
