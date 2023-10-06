import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <label htmlFor="userAnswer">Your Answer:</label>
            <input
                type="text"
                id="userAnswer"
                value={userAnswer}
                onChange={handleChange}
            />
            {userAnswer === expectedAnswer ? (
                <span>✔️ Correct!</span>
            ) : (
                <span>❌ Incorrect!</span>
            )}
        </div>
    );
}
