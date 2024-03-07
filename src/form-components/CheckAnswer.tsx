import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const checkAnswer = () => {
        return userAnswer.toLowerCase() === expectedAnswer.toLowerCase()
            ? "✔️"
            : "❌";
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={userAnswer} onChange={handleChange} />
            <button onClick={checkAnswer}>Check</button>
            <p>{checkAnswer()}</p>
        </div>
    );
}
