import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function Doubler() {
        setDhValue(2 * dhValue);
        return;
    }
    function Halver() {
        setDhValue(0.5 * dhValue);
        return;
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button
                onClick={() => {
                    Doubler();
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    Halver();
                }}
            >
                Halve
            </Button>
        </div>
    );
}
