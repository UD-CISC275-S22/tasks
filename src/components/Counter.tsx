import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <div>
            <span>
                <Button onClick={() => setValue(1 + value)}>Add One </Button>
            </span>
            &nbsp; to {value}.
        </div>
    );
}
