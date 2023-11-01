import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function WelcomeMessage(): JSX.Element {
    const [name, setName] = useState<string>("new student");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formStudent">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <div>
                Welcome {name}, here you will create you potential class
                schedule.
            </div>
        </div>
    );
}
