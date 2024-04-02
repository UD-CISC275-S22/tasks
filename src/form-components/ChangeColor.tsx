import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [colors, setColor] = useState<string>("");
    const allColors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "pink",
        "gray"
    ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    const box = {
        backgroundColor: colors,
        color: "black",
        padding: "1rem"
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {allColors.map((color) => (
                    <Form.Check
                        inline
                        name={color}
                        key={color}
                        label={color}
                        type="radio"
                        value={color}
                        checked={colors === color}
                        onChange={updateColor}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </Form>
            <Form>
                <div data-testid="colored-box" style={box}>
                    You have chosen the color {colors}
                </div>
            </Form>
        </div>
    );
}
