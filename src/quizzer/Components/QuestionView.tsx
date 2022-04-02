import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Question } from "../Interfaces/question";
import { QuestionEditor } from "./QuestionEditor";
import { QuestionRecordControls } from "./QuestionRecordControls";

export function QuestionView({
    question,
    deleteQuestion,
    editQuestion
}: {
    question: Question;
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <QuestionEditor
            changeEditing={changeEditing}
            question={question}
            editQuestion={editQuestion}
            deleteQuestion={deleteQuestion}
        ></QuestionEditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{question.name}</h3>
                    <p>Points: {question.points}</p>
                    <p>{question.body}</p>
                    <QuestionRecordControls
                        changeEditing={changeEditing}
                    ></QuestionRecordControls>
                </Col>
            </Row>
        </Container>
    );
}
