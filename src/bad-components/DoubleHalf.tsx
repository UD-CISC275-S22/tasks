import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

interface DoubleHalfProps {
    DHval: number;
}

function Doubler({ DHval }: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * DHval)}>Double</Button>;
}

function Halver({ DHval }: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * DHval)}>Halve</Button>;
    //prop DHval setDHval
}

export function DoubleHalf(): JSX.Element {
    const [DHval, setDHval] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{DHval}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
        </div>
    );
}
