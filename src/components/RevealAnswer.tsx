import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function showAnswer(): void {
        //will reveal the answer when the button is clicked on
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={showAnswer}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
        //"Reveal Answer is the name of the button and 42 is what it reveals"
    );
}
