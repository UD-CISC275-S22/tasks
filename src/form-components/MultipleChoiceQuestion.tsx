import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

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
            {selectedOption === expectedAnswer ? (
                <span role="img" aria-label="correct">
                    ✔️
                </span>
            ) : (
                <span role="img" aria-label="incorrect">
                    ❌
                </span>
            )}
        </div>
    );
}
