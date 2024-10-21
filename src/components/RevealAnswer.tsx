import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const answer = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Button onClick={answer}>
                {visible ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {visible && <p>42</p>}
        </div>
    );
}
