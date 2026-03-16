import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    return (
        <div>
            <h3>Multiple Choice Question</h3>
        </div>
    );
}
