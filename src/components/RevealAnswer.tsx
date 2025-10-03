import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <p>{visible ? "42" : "???"}</p>
            <Button
                variant={visible ? "danger" : "primary"}
                onClick={() => setVisible(!visible)}
            >
                {visible ? "Hide Answer" : "Reveal Answer"}
            </Button>
        </div>
    );
}
    