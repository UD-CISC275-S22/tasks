import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    //simulates a quiz application that provides a way to "reveal the answer" to a user by clicking a button
    //answer: 42

    //you will need a state - to handle whether the text is visible
    //button labelled "Reveal Answer" that inverts the state
    //42 isn't initially visible, but once it's clicked it will be

    //state
    const [visible, setVisible] = useState<boolean>(false);

    //function to set visible to be the opposite of its previous value
    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
