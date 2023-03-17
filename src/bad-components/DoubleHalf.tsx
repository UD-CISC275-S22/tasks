import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    /** 
    function Doubler(): void {
        //return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
        return setDhValue(2 * dhValue);
    }

    function Halver(): void {
        //return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
        return setDhValue(0.5 * dhValue);
    }
    */
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>
            <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>
        </div>
    );
}
