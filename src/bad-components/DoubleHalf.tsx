import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

//could also do:
//type NumericSetter = (dhValue: number) => void;

interface DoubleHalfProps {
    dhValue: number;
    //(dhValue: number) => void: anonymous function type - wut on earth is that
    //then you could do:
    //setDhValue: NumbericSetter;
    setDhValue: (dhValue: number) => void;
}
function Doubler({ dhValue, setDhValue }: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    //provides two buttons: one doubles the value, the other one halves the value
    //Uncomment the component's instantiation in src/App.tsx, and then fix the component so that it works correctly
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
