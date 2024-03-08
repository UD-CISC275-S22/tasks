import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "white",
        "pink",
        "orange",
        "yellow",
        "red",
        "green",
        "maroon",
        "blue"
    ];
    const [color, setColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    function getColor() {
        return colors.find((col: string) => col === color);
    }

    return (
        <div>
            {/*
    <h3>Change Color</h3>
    <Form.Check
        inline
        style={{ backgroundColor: "white" }}
        type="radio"
        name="colors"
        onChange={updateColor}
        id="color-radio-white"
        label="white"
        value="white"
        checked={color === "#ffffff"}
    />
    <Form.Check
        inline
        style={{ backgroundColor: "pink" }}
        type="radio"
        name="colors"
        onChange={updateColor}
        id="color-radio-pink"
        label="pink"
        value="pink"
        checked={color === "#ffc0cb"}
    />
    <Form.Check
        inline
        style={{ backgroundColor: "orange" }}
        type="radio"
        name="colors"
        onChange={updateColor}
        id="color-radio-orange"
        label="orange"
        value="orange"
        checked={color === "#ffa500"}
    />
    <Form.Check
        inline
        style={{ backgroundColor: "yellow" }}
        type="radio"
        name="colors"
        onChange={updateColor}
        id="color-radio-yellow"
        label="yellow"
        value="yellow"
        checked={color === "#ffff00"}
    />
    <Form.Check
        inline
        style={{ backgroundColor: "red" }}
        type="radio"
        name="colors"
        onChange={updateColor}
        id="color-radio-red"
        label="red"
        value="red"
        checked={color === "#ff0000"}
    />
    <Form.Check
        inline
        style={{ backgroundColor: "green" }}
        type="radio"
        name="colors"
        onChange={updateColor}
        id="color-radio-green"
        label="green"
        value="green"
        checked={color === "#008000"}
    />
    <Form.Check
        inline
        style={{ backgroundColor: "maroon" }}
        type="radio"
        name="colors"
        onChange={updateColor}
        id="color-radio-maroon"
        label="maroon"
        value="maroon"
        checked={color === "#800000"}
    />
    <Form.Check
        inline
        style={{ backgroundColor: "blue" }}
        type="radio"
        name="colors"
        onChange={updateColor}
        id="color-radio-blue"
        label="blue"
        value="blue"
        checked={color === "#0000ff"}
    />
*/}
            <Form.Group controlId="changeColor">
                <Form.Label>Change Color {""}</Form.Label>
                {colors.map((col: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        key={col}
                        onChange={updateColor}
                        label={
                            <span style={{ backgroundColor: col }}>{col}</span>
                        }
                        value={col}
                        checked={color === col}
                    ></Form.Check>
                ))}
            </Form.Group>
            You have chosen{" "}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
