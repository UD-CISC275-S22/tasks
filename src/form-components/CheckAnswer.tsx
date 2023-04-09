import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [inputtedAnswer, setInputtedAnswer] = useState("");
    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputtedAnswer(event.target.value);
    };
    const isCorrect = inputtedAnswer === expectedAnswer;
    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={inputtedAnswer}
                onChange={handleAnswerChange}
            />
            {!isCorrect ? "❌" : "✔️"}
        </div>
    );
}
