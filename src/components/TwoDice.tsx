import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

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
    const [leftDice, setLeftValue] = useState<number>(0);
    const [rightDice, setRightValue] = useState<number>(1);

    const getResults = (): string => {
        if (leftDice === rightDice) {
            if (leftDice === 1) {
                return "You lose";
            } else {
                return "You win";
            }
        } else {
            return "Playing now";
        }
    };

    function rollLeftDice(): void {
        setLeftValue(d6());
    }

    function rollRightDice(): void {
        setRightValue(d6());
    }

    return (
        <div>
            <h3>Two Dice</h3>
            <Container>
                <Row>
                    <Col>
                        <span data-testid="left-die">
                            Left Die Value: {leftDice}
                            <div>
                                <Button onClick={() => rollLeftDice()}>
                                    Roll Left
                                </Button>
                            </div>
                        </span>
                    </Col>
                    <Col>
                        <span data-testid="right-die">
                            Right Die Value: {rightDice}
                            <div>
                                <Button onClick={() => rollRightDice()}>
                                    Roll Right
                                </Button>
                            </div>
                        </span>
                    </Col>
                </Row>
            </Container>
            <h5>Result: {getResults()}</h5>
        </div>
    );
}
