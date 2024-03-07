import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button>Check Answer</button>
            {selectedOption === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

export default MultipleChoiceQuestion;
