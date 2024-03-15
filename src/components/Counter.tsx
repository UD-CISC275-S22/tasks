import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    function addOne() {
        setValue(value + 1);
    }
    return (
        <span>
            <Button onClick={addOne}>Add One</Button>
            to {value}.
        </span>
    );
}
