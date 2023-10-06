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
                    <span key={colour}>
                        <Form.Check
                            inline
                            type="radio"
                            name="choice"
                            onChange={updateColor}
                            id={colour}
                            label={colour}
                            value={colour}
                            checked={currColor === colour}
                        />
                    </span>
                ))}
            </Form.Group>
            <div>
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: currColor }}
                >
                    Current colo is: {currColor}
                </div>
            </div>
        </div>
    );
}
//not passing all test cases
