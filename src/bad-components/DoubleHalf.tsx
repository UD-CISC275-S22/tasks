import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface RevealButtonProps {
    setDhValue: (newVisibility: number) => void;
    dhValue: number;
}

function Doubler({ setDhValue, dhValue }: RevealButtonProps): JSX.Element {
    return (
        <div>
            <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>
        </div>
    );
}

function Halver({ setDhValue, dhValue }: RevealButtonProps): JSX.Element {
    return (
        <div>
            <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>
        </div>
    );
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
