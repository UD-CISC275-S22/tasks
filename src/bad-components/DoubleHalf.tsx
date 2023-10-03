import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface rurvalue {
    setDhValue: () => void;
}

function Doubler({ setDhValue }: rurvalue): JSX.Element {
    return <Button onClick={setDhValue}>Double</Button>;
}

function Halver({ setDhValue }: rurvalue): JSX.Element {
    return <Button onClick={setDhValue}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setvalue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Halver setDhValue={() => setvalue(0.5 * dhValue)}></Halver>

            <Doubler setDhValue={() => setvalue(2 * dhValue)}></Doubler>
        </div>
    );
}
