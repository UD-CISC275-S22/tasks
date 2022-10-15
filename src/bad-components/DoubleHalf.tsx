import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface doubleHalfValue {
    setDoubleHalf: (x: number) => void;
    doubleHalfValue: number;
}

function Doubler({
    setDoubleHalf,
    doubleHalfValue
}: doubleHalfValue): JSX.Element {
    return (
        <Button onClick={() => setDoubleHalf(2 * doubleHalfValue)}>
            Double
        </Button>
    );
}

function Halver({
    setDoubleHalf,
    doubleHalfValue
}: doubleHalfValue): JSX.Element {
    return (
        <Button onClick={() => setDoubleHalf(0.5 * doubleHalfValue)}>
            Halve
        </Button>
    );
}

export function DoubleHalf(): JSX.Element {
    const [doubleHalfValue, setDoubleHalf] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{doubleHalfValue}</span>
            </div>
            <Doubler
                setDoubleHalf={setDoubleHalf}
                doubleHalfValue={doubleHalfValue}
            ></Doubler>
            <Halver
                setDoubleHalf={setDoubleHalf}
                doubleHalfValue={doubleHalfValue}
            ></Halver>
        </div>
    );
}
