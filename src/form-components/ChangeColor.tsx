import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "black",
        "red",
        "blue",
        "purple",
        "pink",
        "lavender",
        "cyan",
        "teal"
    ];
    const [color, setColor] = useState<string>("");

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "x-large" }}>Change Color</div>
            {[...colors].map((current_color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    key={current_color}
                    label={current_color}
                    value={current_color}
                    checked={current_color === color}
                    style={{ backgroundColor: current_color, color: "white" }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setColor(event.target.value)
                    }
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: "white",
                    padding: "20px",
                    marginTop: "10px"
                }}
            >
                {"You have chosen " + color + "."}
            </div>
        </div>
    );
}
