import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // State to store the user's selected choice
    const [selectedChoice, setSelectedChoice] = useState(options[0]);

    // Function to check if the selected choice is the expected answer
    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selectedChoice}
                onChange={(e) => setSelectedChoice(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>
                {/* Display checkmark or cross based on the comparison */}
                {isCorrect ? "✔️" : "❌"}
            </div>
        </div>
    );
}
