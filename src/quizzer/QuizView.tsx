import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Quiz } from "./Quiz";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Description: {quiz.description}</p>
                </Col>
                <Col>{/* <p>{quiz.questions}</p> */}</Col>
            </Row>
        </Container>
    );
}
