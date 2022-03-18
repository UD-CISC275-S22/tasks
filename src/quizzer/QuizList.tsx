import React from "react";
import { Quiz } from "./Quiz";
import { Stack } from "react-bootstrap";
import { QuizView } from "./QuizView";

export function QuizList({ quiz }: { quiz: Quiz[] }): JSX.Element {
    return (
        <Stack gap={3}>
            {quiz.map((quiz: Quiz) => (
                <div key={quiz.title} className="bg-light border m-2 p-2">
                    <QuizView quiz={quiz}></QuizView>
                </div>
            ))}
        </Stack>
    );
}
