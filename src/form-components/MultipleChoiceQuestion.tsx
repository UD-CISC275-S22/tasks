import React, { useState, useEffect } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);
    const [isCorrect, setIsCorrect] = useState<boolean>(
        selectedChoice === expectedAnswer
    );

    useEffect(() => {
        setIsCorrect(selectedChoice === expectedAnswer);
    }, [selectedChoice, expectedAnswer]);

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChoice(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedChoice} onChange={handleSelect}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <p></p>
            {isCorrect ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
