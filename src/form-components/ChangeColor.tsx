import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    //offers the user a bunch of radio buttons labeled with different
    //colors; choosing a radio button updates the text + color of a nearby box
    //of text

    //you will need state to represent the chosen color
    //you can make up your own list of colors, but you must have AT LEAST 8 unique
    //each color must be represented by a radio button
    //there should be a box of text with a "data-testid="colored-box" attribute + value
    //the box of text should have the same text and background color style as the current radio button

    //HINT: use map to render all the color's Form.check tags rather than hardcoding each one
    //: use the inline attribute for the radio buttons
    const [colors, setColors] = useState<string>("blue");
    const COLORS = [
        "pink",
        "blue",
        "green",
        "teal",
        "purple",
        "red",
        "orange",
        "yellow"
    ];

    //control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColors(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="ChangeColorForm">
                <Form.Label>Select a Color</Form.Label>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={"colors-" + color}
                        key={color}
                        style={{ backgroundColor: color }}
                        label={color}
                        value={color}
                        checked={colors === color}
                    />
                ))}
            </Form.Group>
            <div>
                You have Selected{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: colors }}
                >
                    {" "}
                    {colors}
                </span>
            </div>
        </div>
    );
}
