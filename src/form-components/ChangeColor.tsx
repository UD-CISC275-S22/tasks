import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS: string[] = [
    "maroon",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo"
];
export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosen] = useState<string>("");
    return (
        <div className="box">
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name={color + "-button"}
                    onChange={(e) => setChosen(e.target.value)}
                    id={color + "-check"}
                    //capitalize
                    label={
                        <div className="box" style={{ backgroundColor: color }}>
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </div>
                    }
                    value={color}
                    checked={chosenColor === color}
                ></Form.Check>
            ))}
            <div className="card">
                The chosen color is:
                <div
                    className="box"
                    style={{ backgroundColor: chosenColor }}
                    data-testid="colored-box"
                >
                    {chosenColor}
                </div>
            </div>
        </div>
    );
}
