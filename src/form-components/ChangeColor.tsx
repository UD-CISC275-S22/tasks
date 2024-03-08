import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colorList = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "cyan"
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colorList.map((colorVar) => (
                <Form.Check
                    inline
                    key={colorVar}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id={"color-check-" + colorVar}
                    label={colorVar}
                    value={colorVar}
                    checked={color === colorVar}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "100%",
                    height: "100px",
                    backgroundColor: color,
                    marginTop: "10px",
                    fontSize: "400%"
                }}
            >
                {color}
            </div>
        </div>
    );
}
