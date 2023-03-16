import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "pink",
        "brown"
    ];
    const [color, setColor] = useState<number>(0);
    const changeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        const i = COLORS.indexOf(event.target.value);
        setColor(i);
    };
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c: string) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="colors"
                    onChange={changeColor}
                    id={c}
                    label={c}
                    value={c}
                    checked={c === COLORS[color]}
                />
            ))}
            <div>
                <div>Color </div>
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: COLORS[color] }}
                >
                    {COLORS[color]}
                </div>
            </div>
        </div>
    );
}
