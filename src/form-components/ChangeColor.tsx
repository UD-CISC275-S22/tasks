import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const COLORS = [
    "red",
    "blue",
    "yellow",
    "orange",
    "green",
    "cyan",
    "magenta",
    "white",
    "black",
    "purple"
];

export function ChangeColor(): JSX.Element {
    const [chosen, setChosen] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={(event: ChangeEvent) =>
                        setChosen(event.target.value)
                    }
                    id={`colors-choice-${color}`}
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                    value={color}
                    checked={chosen === color}
                />
            ))}
            <div>
                The current color is{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosen }}
                >
                    {chosen}.
                </span>
            </div>
        </div>
    );
}
