import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
interface valueprops {
    dhValue: number;
    setDhValue: (n: number) => void;
}

function Doubler({ dhValue, setDhValue }: valueprops): JSX.Element {
    const doubleValue = () => setDhValue(2 * dhValue);
    return <Button onClick={doubleValue}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: valueprops): JSX.Element {
    const halveValue = () => setDhValue(0.5 * dhValue);

    return <Button onClick={halveValue}>Halve</Button>;
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
