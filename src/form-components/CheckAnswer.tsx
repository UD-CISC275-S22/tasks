import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    // State to store the user's answer
    const [userAnswer, setUserAnswer] = useState("");

    // Function to determine if the answer is correct
    const isCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your answer here"
            />
            <div>
                {/* Display checkmark or cross based on the comparison, 
                     always show ❌ initially since the initial answer is always empty and incorrect */}
                {isCorrect ? "✔️" : "❌"}
            </div>
        </div>
    );
}
