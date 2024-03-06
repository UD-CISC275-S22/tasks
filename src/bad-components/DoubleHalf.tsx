import React, { useState } from "react";
import { Button } from "react-bootstrap";
//const [dhValue, setDhValue] = useState<number>(10);

interface DoubleHalfProp {
    dhValue: number;
    setDhValue: (val: number) => void;
}

function Doubler({ dhValue, setDhValue }: DoubleHalfProp): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: DoubleHalfProp): JSX.Element {
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
