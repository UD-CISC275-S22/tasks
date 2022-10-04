import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setd1] = useState<number>(d6());
    const [d2, setd2] = useState<number>(d6());
    return (
        <span>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => setd1(d6())}>Reroll D1</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setd2(d6())}>Reroll D2</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>D1: {d1}</span>
                    </Col>
                    <Col>
                        <span>D2: {d2}</span>
                    </Col>
                </Row>
            </Container>
        </span>
    );
}
