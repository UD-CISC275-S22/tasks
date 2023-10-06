import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);
    const isCorrect = selectedOption === expectedAnswer;

    const handleOptionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedOption} onChange={handleOptionChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>
                {isCorrect ? "✔️" : "❌"} {isCorrect ? "Correct" : "Incorrect"}
            </div>
        </div>
    );
}
