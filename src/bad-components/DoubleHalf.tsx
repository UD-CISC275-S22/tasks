import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue } from "./DoubleHalfState";
//import { dhValue, setDhValue } from "./DoubleHalfState";

interface H_or_D {
    setDhValue: (setDhValue: number) => void;
    dhValue: number;
}

function Doubler(fin: H_or_D): JSX.Element {
    return (
        <Button onClick={() => fin.setDhValue(2 * fin.dhValue)}>Double</Button>
    );
}

function Halver(fin: H_or_D): JSX.Element {
    return (
        <Button onClick={() => fin.setDhValue(0.5 * fin.dhValue)}>Halve</Button>
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
