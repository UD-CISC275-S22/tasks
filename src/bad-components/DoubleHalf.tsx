import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    /* function Doubler(): JSX.Element {
        return 
    }
    function Halver(): JSX.Element {
        return 
    } */
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
                <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>
                <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>
            </div>
            {/* <Doubler></Doubler>
            <Halver></Halver> */}
        </div>
    );
}
//why this work? what's the different?????
