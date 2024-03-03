import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [atts, setAtts] = useState<number>(4);
    const [prog, setProg] = useState<boolean>(false);

    const startStop = (): void => {
        prog ? setProg(false) : (setProg(true), setAtts(atts - 1));
    };

    return (
        <div>
            <Button onClick={startStop} disabled={prog || !atts}>
                Start Quiz
            </Button>
            <Button onClick={startStop} disabled={!prog}>
                Stop Quiz
            </Button>
            <Button onClick={() => setAtts(atts + 1)} disabled={prog}>
                Mulligan
            </Button>
            <div>Attemps: {atts}</div>
        </div>
    );
}
