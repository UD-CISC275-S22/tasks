import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedOption} onChange={handleOptionChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {selectedOption === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
