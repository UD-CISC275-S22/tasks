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

/*function rerolleq(die1: number, die2: number): number[] {
    if (die1 === die2) {
        die1 = d6();
        die2 = d6();
        return rerolleq(die1, die2);
    } else {
        return [die1, die2];
    }
}*/

export function TwoDice(): JSX.Element {
    const [d1, setd1] = useState<number>(2);
    const [d2, setd2] = useState<number>(3);
    let w = "";
    if (d1 === d2) {
        if (d1 != 1) {
            w = "Win";
        } else {
            w = "Lose";
        }
    }
    return (
        <span>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => setd1(d6())}>Roll Left</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setd2(d6())}>Roll Right</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span data-testid="left-die">left: {d1}</span>
                    </Col>
                    <Col>
                        <span data-testid="right-die">right: {d2}</span>
                    </Col>
                </Row>
            </Container>
            <div>{w}</div>
        </span>
    );
}
