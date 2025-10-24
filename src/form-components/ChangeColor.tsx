import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "gray",
        "green",
        "orange",
        "purple",
        "yellow",
        "pink",
        "teal",
    ];
    const DEFAULT_COLOR = COLORS[0];
    const [colorPicked, setColor] = useState<string>(DEFAULT_COLOR);
    function updateColors(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    label={color}
                    name="color-picked"
                    onChange={updateColors}
                    id="emotion-check-happy"
                    value={color}
                    checked={colorPicked === color}
                    style={{ backgroundColor: color }}
                />
            ))}
            <div>You have chosen</div>
            <div
                data-testid="colored-box"
                style={{ width: "100px", backgroundColor: colorPicked }}
            >
                {colorPicked}.
            </div>
        </div>
    );
}
