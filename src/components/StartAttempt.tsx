import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inquiz, setinquiz] = useState<boolean>(false);
    function startq(): void {
        setAttempts(attempts - 1);
        setinquiz(true);
    }
    return (
        <span>
            <Container>
                <Row>
                    <Col>
                        <Button
                            onClick={() => startq()}
                            disabled={inquiz || attempts <= 0}
                        >
                            Start Quiz
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => setinquiz(false)}
                            disabled={!inquiz}
                        >
                            Stop Quiz
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => setAttempts(attempts + 1)}
                            disabled={inquiz}
                        >
                            Mulligan
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>You are {inquiz ? "in" : "not in"} the quiz</div>
                    </Col>
                    <Col>
                        <div>{attempts} attempts remaining</div>
                    </Col>
                </Row>
            </Container>
        </span>
    );
}
