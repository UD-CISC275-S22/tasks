import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Question2(): JSX.Element {
    const [name, setName] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    // This is the View
    return (
        <div>
            <h6>Question2</h6>
            <Form.Group controlId="formMovieName">
                <Form.Label>
                    {" "}
                    What is the crew of Monkey D. Luffy called?
                </Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
        </div>
    );
}
