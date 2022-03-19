import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
const ListofColor = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple",
    "white",
    "black",
    "cyan"
];

export function ChangeColor(): JSX.Element {
    const [ChosenColor, SetChosenColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            {ListofColor.map((Color: string) => (
                <Form.Check
                    key={Color}
                    inline
                    type="radio"
                    name="Color"
                    onChange={(event: ChangeEvent) =>
                        SetChosenColor(event.target.value)
                    }
                    id={"colors-choice-" + Color}
                    label={
                        <span style={{ backgroundColor: Color }}>{Color}</span>
                    }
                    value={Color}
                    checked={Color === ChosenColor}
                />
            ))}
            our chosen color:{" "}
            <span
                data-testid="colored-box"
                style={{ backgroundColor: ChosenColor }}
            >
                {ChosenColor}
            </span>
        </div>
    );
}
