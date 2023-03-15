import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface dhValueProps {
    setDhValue: (newdhv: number) => void;
    dhvalue: number;
}

function Doubler({ setDhValue, dhvalue }: dhValueProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhvalue)}>Double</Button>;
}

function Halver({ setDhValue, dhvalue }: dhValueProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhvalue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhvalue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhvalue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhvalue={dhvalue}></Doubler>
            <Halver setDhValue={setDhValue} dhvalue={dhvalue}></Halver>
        </div>
    );
}
