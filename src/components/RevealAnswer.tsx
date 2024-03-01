import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, visibility] = useState<boolean>(true);

    function changeVisible(): void {
        visibility(!visible);
    }
    //return <div>Reveal Answer</div>;

    return (
        <div>
            <Button onClick={changeVisible}>Reveal Answer</Button>
            {!visible && <div>42</div>}
        </div>
    );
}

/*
You will need a state to handle whether the text is visible.
There is a button labelled Reveal Answer that inverts the state.
The text 42 is not initially visible.
When the button is clicked, the text 42 should be visible.*/
