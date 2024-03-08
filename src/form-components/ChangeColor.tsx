import React, { cloneElement, useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const Color = [
        "red",
        "blue",
        "green",
        "skyblue",
        "violet",
        "purple",
        "black",
        "grey",
        "brown"
    ];
    const [color, setColor] = useState<string>(Color[0]);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };
    return (
        <div>
            <h3>Change Color</h3>
            {Color.map((col: string) => (
                <Form.Check
                    inline
                    key={col} // has to be unique
                    type="radio"
                    name="radio-color-change"
                    onChange={handleInputChange}
                    id="color-check-c"
                    label={<span style={{ backgroundColor: col }}>{col}</span>}
                    value={col}
                    checked={color === col} // use the state variable
                ></Form.Check>
            ))}
            <div>
                You have chosen:{" "}
                <span data-testid="colored-box" style={{ background: color }}>
                    {color}
                </span>
            </div>
        </div>
    );
}
