import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isRevealed, setIsRevealed] = useState<boolean>(false);

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setIsRevealed(!isRevealed);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {isRevealed && <div>42</div>}
        </div>
    );
}
