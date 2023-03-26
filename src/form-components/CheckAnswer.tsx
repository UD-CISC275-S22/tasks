import React, { useState } from "react";
import { Form } from "react-bootstrap";

{
    /* 4/6 passing */
}

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //const answer = setGuess(guess);
    const [guess, setGuess] = useState<string>("");
    return (
        <div>
            <Form.Label>Check Answer</Form.Label>
            <Form.Control
                type="string"
                value={guess}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setGuess(event.target.value)
                }
            />
            {guess === expectedAnswer ? <div> ✔️ </div> : <div> ❌ </div>}
        </div>
    );
}
