import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [name, setName] = useState<string>("");
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Group controlId="formMovieName">
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
                <div> {name === expectedAnswer ? "✔️" : "❌"}.</div>
            </div>
        </div>
    );
}
