import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { isWhiteSpaceSingleLine } from "typescript";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("Red");
    const COLORS = [
        "Red",
        "Blue",
        "Green",
        "Orange",
        "Purple",
        "White",
        "Brown",
        "Yellow"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                The current color is{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                <br></br>
                {COLORS.map((eachcolor: string) => (
                    <Form.Check
                        key={eachcolor}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setColor(event.target.value)}
                        id={"colored-box-" + color}
                        label={
                            <span
                                style={{
                                    backgroundColor: eachcolor,
                                    color: "black"
                                }}
                            >
                                {eachcolor}
                            </span>
                        }
                        value={eachcolor}
                        checked={eachcolor === color}
                    />
                ))}
            </div>
        </div>
    );
}
