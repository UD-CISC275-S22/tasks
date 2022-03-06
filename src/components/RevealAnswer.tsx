import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);
    function flipReveal(): void {
        setRevealed(!revealed);
    }
    return (
        <div>
            <Button onClick={flipReveal}>Reveal Answer</Button>
            {revealed && <div>42</div>}
        </div>
    );
}
