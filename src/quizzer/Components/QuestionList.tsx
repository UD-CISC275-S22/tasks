import React from "react";
import { Question } from "../Interfaces/question";
//import { ListGroup } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions,
    deleteQuestion,
    editQuestion
}: {
    questions: Question[];
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
}): JSX.Element {
    return (
        <Stack gap={1}>
            {questions.map((question: Question) => (
                <div key={question.id} className="bg-light border m-2 p-2">
                    <QuestionView
                        question={question}
                        deleteQuestion={deleteQuestion}
                        editQuestion={editQuestion}
                    ></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
