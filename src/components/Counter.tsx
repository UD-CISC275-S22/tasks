import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <h3>counter</h3>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            to {value}.
        </span>
    );
}
