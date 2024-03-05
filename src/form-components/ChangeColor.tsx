import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                <Form.Check
                    type="radio"
                    name="colors"
                    style={{ backgroundColor: "red" }}
                    onChange={updateColor}
                    id="color-check-red"
                    label="Red"
                    inline
                    value="red"
                    checked={color === "red"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    style={{ backgroundColor: "blue" }}
                    onChange={updateColor}
                    id="color-check-blue"
                    label="Blue"
                    inline
                    value="blue"
                    checked={color === "blue"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    style={{ backgroundColor: "green" }}
                    onChange={updateColor}
                    id="color-check-green"
                    label="Green"
                    inline
                    value="green"
                    checked={color === "green"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    style={{ backgroundColor: "gray" }}
                    onChange={updateColor}
                    id="color-check-gray"
                    label="Gray"
                    inline
                    value="gray"
                    checked={color === "gray"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    style={{ backgroundColor: "orange" }}
                    onChange={updateColor}
                    id="color-check-orange"
                    label="Orange"
                    inline
                    value="orange"
                    checked={color === "orange"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    style={{ backgroundColor: "purple" }}
                    onChange={updateColor}
                    id="color-check-purple"
                    label="Purple"
                    inline
                    value="purple"
                    checked={color === "purple"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    style={{ backgroundColor: "yellow" }}
                    onChange={updateColor}
                    id="color-check-yellow"
                    label="Yellow"
                    inline
                    value="yellow"
                    checked={color === "yellow"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    style={{ backgroundColor: "black" }}
                    onChange={updateColor}
                    id="color-check-black"
                    label="Black"
                    inline
                    value="black"
                    checked={color === "black"}
                />
            </Form.Group>
            <p style={{ backgroundColor: color }} data-testid="colored-box">
                you have chosen {color}
            </p>
            {/*<div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}}
            ></div>*/}
        </div>
    );
}
