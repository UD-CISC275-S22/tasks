import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "RED",
    "GREEN",
    "BLUE",
    "YELLOW",
    "ORANGE",
    "PURPLE",
    "PINK",
    "TEAL"
];
const DEFAULR_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setColor] = useState<string>(DEFAULR_COLOR);

    function updateColor(
        event: React.ChangeEvent<
            HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
        >
    ) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id="color-check"
                        label={
                            <span style={{ backgroundColor: color }}>
                                {color}
                            </span>
                        }
                        value={color}
                        checked={chosenColor === color}
                    />
                ))}
            </div>
            The chosen color is{" "}
            <span
                data-testid="colored-box"
                style={{ backgroundColor: chosenColor }}
            >
                {" "}
                {chosenColor}
            </span>
        </div>
    );
}
