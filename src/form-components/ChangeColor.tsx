import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("red");
    const COLORS = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "cyan",
        "black",
        "purple"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        style={{ backgroundColor: `${color}` }}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        type="radio"
                        name={color}
                        id={color}
                        label={color}
                        key={color}
                        value={color}
                        checked={selectedColor === color}
                    />
                ))}
                <br></br>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: `${selectedColor}` }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}
