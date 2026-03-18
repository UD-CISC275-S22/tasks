import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);

    return (
        <div>
            <p>
                <strong>Colored Box</strong>
            </p>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <Button
                    onClick={() =>
                        { setColorIndex((1 + colorIndex) % COLORS.length); }
                    }
                >
                    Next Color
                </Button>
                <div
                    data-testid="colored-box"
                    style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: COLORS[colorIndex],
                        display: "inline-block",
                        verticalAlign: "bottom",
                        marginLeft: "5px",
                    }}
                ></div>
            </div>
        </div>
    );
}
