import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Question } from "../Interfaces/question";
import { QuestionEditor } from "./QuestionEditor";
import { QuestionRecordControls } from "./QuestionRecordControls";

export function QuestionView({
    question,
    deleteQuestion,
    editQuestion,
    points
}: {
    question: Question;
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
    points: number;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [shortanswer, setshortAnswer] = useState<string>("");
    const [mc, setMC] = useState<string>("");

    function changeEditing() {
        setEditing(!editing);
    }

    function updateShortAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setshortAnswer(event.target.value);
    }

    function updateMC(event: React.ChangeEvent<HTMLSelectElement>) {
        setMC(event.target.value);
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
                        question={question}
                        updateAnswer={updateShortAnswer}
                        changeEditing={changeEditing}
                        updateMC={updateMC}
                        mc={mc}
                    ></QuestionRecordControls>
                </Col>
            </Row>
            <Row>
                {" "}
                {question.correctAns.toLowerCase() ===
                    shortanswer.toLowerCase() || question.correctAns === mc
                    ? "✅"
                    : "❌"}
            </Row>
        </Container>
    );
}
