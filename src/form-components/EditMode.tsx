import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [defaultMessage, setDefaultMessage] =
        useState<string>("Maliq is a Student");
    const [alternateMessage, setALternateMessage] = useState<string>("");
    return (
        <div>
            <h3>Edit Mode</h3>
        </div>
    );
}
