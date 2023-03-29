import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");

    function userInput(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={userInput}
                id="color-blue"
                label="Blue"
                value="blue"
                checked={color === "blue"}
                style={{ backgroundColor: "blue" }}
            />
            <Form.Check
                inline
                type="radio"
                name="emotions"
                onChange={userInput}
                id="emotion-check-sad"
                label="Purple"
                value="purple"
                checked={color === "purple"}
                style={{ backgroundColor: "purple" }}
            />
            <Form.Check
                inline
                type="radio"
                name="emotions"
                onChange={userInput}
                id="emotion-check-angry"
                label="Yellow"
                value="yellow"
                checked={color === "yellow"}
                style={{ backgroundColor: "yellow" }}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={userInput}
                id="color-blue"
                label="Orange"
                value="orange"
                checked={color === "orange"}
                style={{ backgroundColor: "orange" }}
            />
            <Form.Check
                inline
                type="radio"
                name="emotions"
                onChange={userInput}
                id="emotion-check-sad"
                label="Green"
                value="green"
                checked={color === "green"}
                style={{ backgroundColor: "green" }}
            />
            <Form.Check
                inline
                type="radio"
                name="emotions"
                onChange={userInput}
                id="emotion-check-angry"
                label="Pink"
                value="pink"
                checked={color === "pink"}
                style={{ backgroundColor: "pink" }}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={userInput}
                id="color-blue"
                label="Black"
                value="black"
                checked={color === "black"}
                style={{ backgroundColor: "black" }}
            />
            <Form.Check
                inline
                type="radio"
                name="emotions"
                onChange={userInput}
                id="emotion-check-sad"
                label="Red"
                value="red"
                checked={color === "red"}
                style={{ backgroundColor: "red" }}
            />
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {" "}
                You have chosen {color}{" "}
            </div>
        </div>
    );
}
