/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "black"
    ];

    const [chosenColor, setChosenColor] = useState("");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="color"
                        onChange={updateColor}
                        id={color}
                        label={
                            <span style={{ backgroundColor: color }}>
                                {color}
                            </span>
                        }
                        value={color}
                        checked={chosenColor === color}
                    />
                ))}
            </Form>
            <p>You have choosen</p>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: chosenColor,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
