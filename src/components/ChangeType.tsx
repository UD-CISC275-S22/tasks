import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    // My functions for Reveal Answer 👺
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }
    return (
        <div>
            <div>Change Type</div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
