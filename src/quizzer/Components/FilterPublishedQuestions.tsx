import React from "react";
import { Button, Stack } from "react-bootstrap";
import { Question } from "../Interfaces/question";
import { QuestionView } from "./QuestionView";

export function FilterPublishedQuestions({
    questions,
    editQuestion,
    deleteQuestion
}: {
    questions: Question[];
    editQuestion: (id: number, newQuestion: Question) => void;
    deleteQuestion: (id: number) => void;
}): JSX.Element {
    const sorted = questions.filter(
        (ques: Question): boolean => ques.published
    );
    return (
        <Stack gap={1}>
            {sorted.map((question: Question) => (
                <div key={question.id} className="bg-light border m-2 p-2">
                    <QuestionView
                        question={question}
                        editQuestion={editQuestion}
                        deleteQuestion={deleteQuestion}
                    ></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
