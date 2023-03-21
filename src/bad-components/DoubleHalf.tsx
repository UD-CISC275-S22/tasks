import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

{
    /* 4/5 passing tests */
}
interface Answer {
    setDhValue: (setDhValue: number) => void;
    dhValue: number;
}
function Doubler({ setDhValue, dhValue }: Answer): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ setDhValue, dhValue }: Answer): JSX.Element {
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
            <div>
                <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
                <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
            </div>
        </div>
    );
}
