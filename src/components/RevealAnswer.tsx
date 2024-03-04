import React, { useState } from "react";
import { Button } from "react-bootstrap";
export function RevealAnswer(): JSX.Element {
    const [toggled, setToggled] = useState<boolean>(false);
    const toggle = () => {
        setToggled(!toggled);
    };
    return (
        <div>
            <Button onClick={toggle}>RevealAnswer</Button>
            <p>{toggled ? "42" : "The answer to everything is:"}</p>
        </div>
    );
}
