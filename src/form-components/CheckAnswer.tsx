import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [check, setCheck] = useState<boolean>(true);
    const changeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };
    const isChecked = () => {
        setCheck((nextCheck) => !nextCheck);
    };
    return (
        <div>
            <h3>Check Answer</h3>
            <form>
                <label>
                    Enter Answer:
                    <input type="text" onChange={changeAnswer}></input>
                    <Button onClick={isChecked}>Check Answer</Button>
                </label>
                {check && (
                    <div>
                        {answer === expectedAnswer ? <p>✔️</p> : <p>❌</p>}
                    </div>
                )}
            </form>
        </div>
    );
}
