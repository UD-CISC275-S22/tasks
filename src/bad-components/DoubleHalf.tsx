import React, { useState } from "react";
import { Button } from "react-bootstrap";
function Doubler({ onDouble }: { onDouble: () => void }): JSX.Element {
    return <Button onClick={onDouble}>Double</Button>;
}

function Halver({ onHalve }: { onHalve: () => void }): JSX.Element {
    return <Button onClick={onHalve}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10); // State management is now inside the component

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler onDouble={() => setDhValue(2 * dhValue)}></Doubler>
            <Halver onHalve={() => setDhValue(0.5 * dhValue)}></Halver>
        </div>
    );
}
