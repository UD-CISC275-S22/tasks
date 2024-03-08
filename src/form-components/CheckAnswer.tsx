import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            {userAnswer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
