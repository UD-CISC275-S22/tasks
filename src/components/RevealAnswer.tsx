import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }
    return (
        <>
            <div style={{ fontSize: "x-large" }}> Reveal Answer</div>
            <span>
                <Button onClick={flipVisibility} variant={"outline-dark"}>
                    Reveal Answer
                </Button>
            </span>{" "}
            <div> {!visible && "42"} </div>
        </>
    );
}
