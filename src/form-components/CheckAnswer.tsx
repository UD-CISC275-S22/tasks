import React, { useState } from "react";
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const diffInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };
    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={diffInput}
                placeholder="Enter your answer"
            />
            {userAnswer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
