import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [display, setDisplay] = useState(false);
    const [answer, setAnswer] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };
    const handleCheckAnswer = () => {
        setDisplay((prevDisplay) => !prevDisplay);
    };
    return (
        <div>
            <h3>Check Answer</h3>
            <form>
                <label>
                    Enter Answer:
                    <input type="text" onChange={handleInputChange}></input>
                    <button type="button" onClick={handleCheckAnswer}>
                        Check Answer
                    </button>
                </label>
                {!display && (
                    <div>
                        {answer === expectedAnswer ? <p>✔️</p> : <p>❌</p>}
                    </div>
                )}
            </form>
        </div>
    );
}
