// Assuming the presence of a useState hook managing dhValue inside DoubleHalf

import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoublerProps {
    dhValue: number;
    setDhValue: (value: number) => void;
}

const Doubler = ({ dhValue, setDhValue }: DoublerProps): JSX.Element => {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
};

const Halver = ({ dhValue, setDhValue }: DoublerProps): JSX.Element => {
    return <Button onClick={() => setDhValue(dhValue * 0.5)}>Halve</Button>;
};

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(1); // Example initial value

    return (
        <div>
            <h3>Double Half</h3>
            <span>The current value is: {dhValue}</span>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
