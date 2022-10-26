import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "gray",
    "black",
    "brown"
];

export function ChangeColor(): JSX.Element {
    const [color, setcolor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setcolor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {Colors.map((Color: string) => (
                <Form.Check
                    inline
                    id={Color}
                    key={Color}
                    type="radio"
                    name="color"
                    value={Color}
                    label={Color}
                    onChange={updateColor}
                ></Form.Check>
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                Your chosen color is {color}
            </div>
        </div>
    );
}
