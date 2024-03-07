import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const checkAnswer = () => {
        return selectedOption === expectedAnswer ? "✔️" : "❌";
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <p>
                What is your favorite color?
                <select value={selectedOption} onChange={handleChange}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </p>
            <p>{checkAnswer()}</p>
        </div>
    );
}
