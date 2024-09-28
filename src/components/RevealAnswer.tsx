import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answer, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!answer);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {answer && <div>42</div>}
        </div>
    );
}
