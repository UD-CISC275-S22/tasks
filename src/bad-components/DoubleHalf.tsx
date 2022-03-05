import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface numberOperation {
    number: () => void;
}

function Doubler({ number }: numberOperation): JSX.Element {
    return <Button onClick={number}>Double</Button>;
}

function Halver({ number }: numberOperation): JSX.Element {
    return <Button onClick={number}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const double = () => {
        setDhValue(2 * dhValue);
    };

    const halve = () => {
        setDhValue(0.5 * dhValue);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                <Doubler number={double}></Doubler>
                <Halver number={halve}></Halver>
            </div>
            The current value is: <span>{dhValue}</span>
        </div>
    );
}
