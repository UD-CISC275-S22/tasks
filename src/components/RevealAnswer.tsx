import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => setRevealed(!revealed)}>
                Reveal Answer
            </Button>
            {revealed && <div>42</div>}
        </div>
    );
}
