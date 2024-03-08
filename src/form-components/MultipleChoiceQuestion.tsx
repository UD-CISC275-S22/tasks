import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const isCorrect = selectedOption === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isCorrect ? (
                <span style={{ color: "green" }}>✔️</span>
            ) : (
                <span style={{ color: "red" }}>❌</span>
            )}
        </div>
    );
}
