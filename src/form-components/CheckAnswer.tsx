import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
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
