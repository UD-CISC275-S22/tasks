import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-happy-check"
                label="Happy?"
                checked={isStudent}
                onChange={updateStudent}
            />
        </div>
    );
}
