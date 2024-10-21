import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(e.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>

            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                placeholder="Type your answer here"
            />

            <div>
                {userAnswer === expectedAnswer ? "✔️ Correct" : "❌ Incorrect"}
            </div>
        </div>
    );
}
