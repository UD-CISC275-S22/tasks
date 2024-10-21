import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState("");

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={givenAnswer}
                onChange={(e) => {
                    setGivenAnswer(e.target.value);
                }}
            />
            <div>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
