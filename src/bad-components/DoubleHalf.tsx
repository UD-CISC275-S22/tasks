import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "x-large" }}>Double Half</div>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button
                onClick={() => setDhValue(0.5 * dhValue)}
                variant={"outline-dark"}
            >
                Halve
            </Button>
            <Button
                onClick={() => setDhValue(2 * dhValue)}
                variant={"outline-dark"}
            >
                Double
            </Button>
        </div>
    );
}
