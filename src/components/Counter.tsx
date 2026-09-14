import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => {setValue(1 + value)}}>Add One</Button>
            {/* I added brackets surrounding setValue to get rid of the lint erorr */}
            to {value}.
        </span>
    );
}
