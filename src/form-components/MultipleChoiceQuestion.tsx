import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    return (
        <div>
            <h3>Multiple Choice Question</h3>
        </div>
    );
}
