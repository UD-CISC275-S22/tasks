import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

interface updateNumber {
    setDhValue: (dhValue: number) => void;
    newDhValue: number;
}

function Doubler({ setDhValue, newDhValue }: updateNumber): JSX.Element {
    return <Button onClick={() => setDhValue(2 * newDhValue)}>Double</Button>;
}

function Halver({ setDhValue, newDhValue }: updateNumber): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * newDhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler newDhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver newDhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
