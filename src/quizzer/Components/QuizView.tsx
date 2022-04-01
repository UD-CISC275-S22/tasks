import React from "react";
import { useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Quiz} from "../Interfaces/quiz";

export function QuizView({
    quiz,
    deleteQuiz,
    editQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (title: string) => void;
    editQuiz: (title: string, newQuiz: Quiz) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing(){
        setEditing(!editing);
    }

    return editing ? (
    );
}
