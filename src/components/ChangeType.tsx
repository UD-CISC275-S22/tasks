import React, { useState } from "react";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<string>("Short Answer");
    return (
        <div>
            <button onClick={() => setType(
                type === "Multiple Choice" ? "Short Answer" : "Multiple Choice"
            )}>
                Change Type
            </button>
            {type === "Multiple Choice" ? "Multiple Choice" : "Short Answer"}
        </div>
    );
}
