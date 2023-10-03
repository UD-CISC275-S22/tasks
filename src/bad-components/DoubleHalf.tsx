import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";
/*
function Doubler(): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver(): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}
*/
export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    function Doubler(): void {
        setDhValue(2 * dhValue);
    }

    function Halver(): void {
        setDhValue(0.5 * dhValue);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <div>
                <Button onClick={Doubler}>Double</Button>
            </div>
            <div>
                <Button onClick={Halver}>Halve</Button>
            </div>
        </div>
    );
}
