import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);

    return (
        <span>
            <Button onClick={() => setValue((prev) => prev + 1)}>
                Add One
            </Button>
            to {value}.
        </span>
    );
}