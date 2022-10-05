import React, { useState } from "react";
import { Button } from "react-bootstrap";
const [visible, setVisible] = useState<boolean>(true);
function flipVisibility(): void {
    setVisible(!visible);
}
export function RevealAnswer(): JSX.Element {
    return (
        <div>
            <Button onClick={flipVisibility}>Show/Hide</Button>
            {visible && <div>42</div>}
        </div>
    );
}
