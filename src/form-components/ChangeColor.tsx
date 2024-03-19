import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLOR = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLOR.map((option: string) => (
                    <>
                        <Form.Check
                            key={option}
                            inline
                            type="radio"
                            name="color"
                            onChange={updateColor}
                            label={option}
                            style={{ backgroundColor: option }}
                            value={option}
                            checked={option === color}
                        />
                    </>
                ))}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color
                    }}
                >
                    You chose {color}
                </span>
            </div>
        </div>
    );
}
