import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "yellow",
    "blue",
    "green",
    "pink",
    "purple",
    "black",
    "white",
    "cyan",
    "orange"
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
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setChosen(event.target.value)
                    }
                    id={"colors-choice-" + color}
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                    value={color}
                    checked={chosen === color}
                />
            ))}
            our chosen color:{" "}
            <span data-testid="colored-box" style={{ backgroundColor: chosen }}>
                {chosen}
            </span>
        </div>
    );
}
