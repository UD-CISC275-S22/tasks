import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    const [select, setSelected] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    function changeSelected() {
        setSelected(!select);
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
                    {/*<MovieRating={movie.rating}></MovieRating*/}
                    <p>Number of Questions: {quiz.numQuest}</p>
                    <RecordControls
                        changeEditing={changeEditing}
                        changeSelected={changeSelected}
                    ></RecordControls>
                </Col>
            </Row>
        </Container>
    );
}
