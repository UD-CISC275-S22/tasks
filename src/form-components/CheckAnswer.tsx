import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const isCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                value={userAnswer}
                onChange={(event) => setUserAnswer(event.target.value)}
            />
            {isCorrect ? "✔️" : "❌"}
        </div>
    );
}
