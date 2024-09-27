import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // State to track the currently selected choice
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]); // Initially the first option

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            {/* Dropdown to select an answer */}
            <select
                value={selectedChoice}
                onChange={(e) => {
                    setSelectedChoice(e.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {/* Display whether the answer is correct or incorrect */}
            <div>{selectedChoice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
