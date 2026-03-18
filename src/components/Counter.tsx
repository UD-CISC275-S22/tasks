import React from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.ReactElement {
    const [value, setValue] = React.useState<number>(0);

    return (
        <span>
            <Button
                onClick={() => {
                    setValue((prevValue: number): number => prevValue + 1);
                }}
            >
                Add One
            </Button>
            to {value}.
        </span>
    );
}
