import React, { useState } from "react";
import { Form } from "react-bootstrap";
const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "white",
    "brown",
    "pink"
];
const default_color = colors[0];
export function ChangeColor(): JSX.Element {
    const [currColor, setCurrColor] = useState<string>(default_color);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="choosenColor">
                {colors.map((colour: string) => (
                    // eslint-disable-next-line react/jsx-key
                    <Form.Check
                        inline
                        type="radio"
                        name="choice"
                        onChange={updateColor}
                        id="color-check"
                        label={colour}
                        value={colour}
                        checked={currColor === colour}
                        style={{ backgroundColor: colour }}
                    />
                ))}
            </Form.Group>
            <div>
                current color is:
                <div style={{ backgroundColor: currColor }}>{currColor}</div>
            </div>
        </div>
    );
}
