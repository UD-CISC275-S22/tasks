import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("white");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Change Color</h3>
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-red"
                    label="red"
                    value="red"
                    checked={color === "red"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-orange"
                    label="orange"
                    value="orange"
                    checked={color === "orange"}
                />

                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-yellow"
                    label="yellow"
                    value="yellow"
                    checked={color === "yellow"}
                />

                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-green"
                    label="green"
                    value="green"
                    checked={color === "green"}
                />

                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-blue"
                    label="blue"
                    value="blue"
                    checked={color === "blue"}
                />

                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-purple"
                    label="purple"
                    value="purple"
                    checked={color === "purple"}
                />

                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-black"
                    label="black"
                    value="black"
                    checked={color === "black"}
                />

                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-white"
                    label="white"
                    value="white"
                    checked={color === "white"}
                />
            </div>
            <span style={{ background: color }} data-testid="colored-box">
                {" "}
                Color is: {color}
            </span>
        </div>
    );
}
