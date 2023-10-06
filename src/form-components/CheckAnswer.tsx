import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                aria-label="user-answer"
            />
            {userAnswer === expectedAnswer ? (
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
