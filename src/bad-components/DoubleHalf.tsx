import React, { useState } from "react";
// import { Button } from "react-bootstrap";
export function Doubler({
    dhValue,
    setDhValue
}: {
    dhValue: number;
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
    const handleDouble = () => {
        setDhValue(2 * dhValue);
    };

    return <button onClick={handleDouble}>Double</button>;
}

export function Halver({
    dhValue,
    setDhValue
}: {
    dhValue: number;
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
    const handleHalve = () => {
        setDhValue(0.5 * dhValue);
    };

    return <button onClick={handleHalve}>Halve</button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10); // Initial value set to 10

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
