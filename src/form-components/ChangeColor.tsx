import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const colorlist = [
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

interface color {
    colors: string;
    setColors: (color: string) => void;
}

function Coloredbox({ color }: { color: string }): JSX.Element {
    return (
        <div
            style={{
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        >
            {color}
        </div>
    );
}
function UpdateColor({ colors, setColors }: color): JSX.Element {
    function Updatecolor(event: ChangeEvent) {
        setColors(event.target.value);
    }
    return (
        <div>
            {colorlist.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="Colors"
                    onChange={Updatecolor}
                    id={color}
                    value={color}
                    checked={color === colors}
                    key={color}
                    label={Coloredbox({ color })}
                />
            ))}
        </div>
    );
}

export function ChangeColor(): JSX.Element {
    const [colors, setColors] = useState<string>(colorlist[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <UpdateColor colors={colors} setColors={setColors}></UpdateColor>
            You have chosen{" "}
            <span data-testid="colored-box" style={{ backgroundColor: colors }}>
                {colors}
            </span>
        </div>
    );
}
