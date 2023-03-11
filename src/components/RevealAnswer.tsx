import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
export function RevealAnswer(): JSX.Element {
    const [visible, setVisibility] = useState<boolean>(false);
    return !visible ? (
        <div>
            <Button onClick={() => setVisibility(!visible)}>
                Reveal Answer
            </Button>
        </div>
    ) : (
        <div>
            <Button onClick={() => setVisibility(!visible)}>Try again?</Button>
            <div className="card">42</div>
        </div>
    );
}
