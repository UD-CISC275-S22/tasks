import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "blue",
        "red",
        "yellow",
        "green",
        "orange",
        "purple",
        "pink",
        "gray"
    ];
    const defaultColor = colors[0];
    const [choosenColor, setColor] = useState(defaultColor);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <form
                style={{
                    backgroundColor: choosenColor,
                    justifyContent: "center",
                    display: "flex",
                    padding: "20px"
                }}
                data-testid="colored-box"
            >
                {colors.map((color: string) => (
                    <Form.Check
                        style={{ padding: "20px" }}
                        key={color}
                        type="radio"
                        value={color}
                        label={color}
                        onChange={updateColor}
                        checked={color === choosenColor}
                    ></Form.Check>
                ))}
            </form>
            <h4>
                You have choosen{" "}
                <span style={{ backgroundColor: choosenColor }}>
                    {choosenColor}
                </span>
            </h4>
        </div>
    );
}
