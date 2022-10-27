import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <>
            <Button
                onClick={() => {
                    setVisible((notVisible) => !notVisible);
                }}
            >
                {" "}
                Reveal Answer
            </Button>
            {visible ? <div>42</div> : <></>}
        </>
    );
}
