import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "yellow",
        "green",
        "purple",
        "pink",
        "cyan",
        "violet"
    ];
    const [color, setColor] = useState<string>(colors[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((c: string) => (
                    <div key={c}>
                        <Form.Check
                            inline
                            type="radio"
                            name="colors"
                            onChange={updateColor}
                            id="color-check-c"
                            value={c}
                            checked={color === c}
                            style={{ background: c }}
                        />
                        <label>{c}</label>
                    </div>
                ))}
            </div>
            <div data-testid="colored-box" style={{ background: color }}>
                You have chosen {color}
            </div>
        </div>
    );
}
