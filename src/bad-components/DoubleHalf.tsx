import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ValueProps {
    setDhValue: (newDhValue: number) => void;
    DhValue: number;
}

function Doubler({ setDhValue, DhValue }: ValueProps): JSX.Element {
    return <Button onClick={() => setDhValue(DhValue * 2)}>Double</Button>;
}

function Halver({ setDhValue, DhValue }: ValueProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * DhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [DhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{DhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} DhValue={DhValue}></Doubler>
            <Halver setDhValue={setDhValue} DhValue={DhValue}></Halver>
        </div>
    );
}
