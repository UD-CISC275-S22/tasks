import React, { useState } from "react";
import { Button } from "react-bootstrap";
import type { Dispatch, SetStateAction } from "react";

interface ButtonProps {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
}

function Doubler({ value, setValue }: ButtonProps): JSX.Element {
    return <Button onClick={() => setValue(2 * value)}>Double</Button>;
}

function Halver({ value, setValue }: ButtonProps): JSX.Element {
    return <Button onClick={() => setValue(0.5 * value)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler value={value} setValue={setValue}></Doubler>
            <Halver value={value} setValue={setValue}></Halver>
        </div>
    );
}
