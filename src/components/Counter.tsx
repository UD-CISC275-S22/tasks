import React from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [count, setCount] = React.useState(0);

    return (
        <span>
            <Button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Add One
            </Button>
            to {count}.
        </span>
    );
}
