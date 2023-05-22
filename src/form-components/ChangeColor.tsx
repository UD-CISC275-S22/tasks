import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "cyan",
    "purple",
    "magenta",
    "pink"
];
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div
                data-testid="colored-box"
                style={{ display: "inline-block", backgroundColor: color }}
            >
                <h5>You have chosen </h5>
                <p>{color}</p>
            </div>

            <div style={{ display: "inline-block" }}>
                {COLORS.map((colorOption: string) => (
                    <Form.Check
                        inline
                        key={colorOption}
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={`color-change-${colorOption}`}
                        label={
                            <>
                                <span
                                    style={{
                                        display: "inline-block",
                                        backgroundColor: colorOption
                                    }}
                                >
                                    {colorOption}
                                </span>
                            </>
                        }
                        value={colorOption}
                        checked={color === colorOption}
                    />
                ))}
            </div>
        </div>
    );
}
