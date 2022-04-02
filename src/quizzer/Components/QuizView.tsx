import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Quiz } from "../Interfaces/quiz";
import { QuizEditor } from "./QuizEditor";
import { RecordControls } from "./RecordControls";

export function QuizView({
    quiz,
    deleteQuiz,
    editQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (id: number) => void;
    editQuiz: (id: number, newQuiz: Quiz) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <QuizEditor
            changeEditing={changeEditing}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
        ></QuizEditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                    <p>{quiz.description}</p>
                    <p>Number of Questions: {quiz.numQuest}</p>
                    <RecordControls
                        changeEditing={changeEditing}
                    ></RecordControls>
                </Col>
            </Row>
        </Container>
    );
}
