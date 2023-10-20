import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDieValue, setLeftDieValue] = useState(4);
    const [rightDieValue, setRightDieValue] = useState(5);

    const rollLeftDie = () => {
        setLeftDieValue(d6());
    };
    const rollRightDie = () => {
        setRightDieValue(d6());
    };

    const gameOutcome = leftDieValue === rightDieValue;
    const gameMessage = gameOutcome
        ? leftDieValue === 1
            ? "Lose"
            : "Win"
        : "";
    return (
        <div>
            <div data-testid="left-die"> {leftDieValue}</div>
            <div data-testid="right-die"> {rightDieValue}</div>
            <Button onClick={rollLeftDie}> Roll Left</Button>
            <Button onClick={rollRightDie}> Roll Right</Button>
            {gameMessage && <div> {gameMessage}</div>}
        </div>
    );
}
