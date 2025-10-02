import React, { useState } from "react";

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <div>
            <button onClick={() => setValue(value + 1)}>Add One</button>
            <div>Count: {value}</div>
            <button onClick={() => setValue(value - 1)}>Subtract One</button>
        </div>
    );
}
