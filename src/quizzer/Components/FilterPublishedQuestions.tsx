import React from "react";
import { Button } from "react-bootstrap";
import { Question } from "../Interfaces/question";

export function FilterPublishedQuestions({
    questions,
    editQuestion,
    deleteQuestion
}: {
    questions: Question[],
    editQuestion: (id: number, newQuestion: Question) => void;
    deleteQuestion: (id: number) => void;
}): JSX.Element{
    const sorted = 
    return(

    )
}