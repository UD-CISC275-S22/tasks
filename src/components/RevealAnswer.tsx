import React from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.ReactElement {
    const [visible, setVisible] = React.useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                Reveal Answer
            </Button>
            {visible && <div>42</div>}
        </div>
    );
}
