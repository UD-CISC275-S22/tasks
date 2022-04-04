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
    const [answer, setAnswer] = useState<string>("");
    const [published, setPublished] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    function changePublished() {
        setPublished(!published);
        question.published = published;
    }

    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value);
    }

    function updateMCAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    function checkAnswer(question: Question, answer: string): boolean {
        question.inputAns = answer;
        if (
            question.correctAns.toLowerCase() === answer.toLowerCase() ||
            answer === question.correctAns
        ) {
            question.correct = true;
            return true;
        } else {
            return false;
        }
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
                        updateAnswer={updateAnswer}
                        changeEditing={changeEditing}
                        updateMC={updateMCAnswer}
                        mc={answer}
                        changePublished={changePublished}
                    ></QuestionRecordControls>
                </Col>
            </Row>
            <Row>{checkAnswer(question, answer) ? "✅" : "❌"}</Row>
        </Container>
    );
}
