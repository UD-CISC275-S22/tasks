import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

interface dhProps {
    dhValue: number;
    setDhValue: (num: number) => void;
}

function Doubler({ setDhValue, dhValue }: dhProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ setDhValue, dhValue }: dhProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
