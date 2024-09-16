import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "magenta",
        "pink",
        "purple",
        "yellow",
        "green",
        "white"
    ];
    const DEFAULT_COLOR = COLORS[0];
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <>
                    <Form.Check
                        inline
                        type="radio"
                        id="colorButtons"
                        name="What's your favorite color?"
                        value={color}
                        label={color}
                        onChange={updateColor}
                        style={{ backgroundColor: color }}
                    />
                </>
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                You chose {color}
            </div>
        </div>
    );
}
