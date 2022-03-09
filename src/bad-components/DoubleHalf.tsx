import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleAndHalf {
    setDhValue: (initial: number) => void;
    dhValue: number;
}

function Doubler({ setDhValue, dhValue }: DoubleAndHalf): JSX.Element {
    return (
        <div>
            <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>
        </div>
    );
}

function Halver({ setDhValue, dhValue }: DoubleAndHalf): JSX.Element {
    return (
        <div>
            <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>
        </div>
    );
}

export function DoubleHalf(): JSX.Element {
    const [Value, setValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{Value}</span>
            </div>
            <Doubler setDhValue={setValue} dhValue={Value}></Doubler>
            <Halver setDhValue={setValue} dhValue={Value}></Halver>
        </div>
    );
}
