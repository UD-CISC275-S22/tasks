import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isStudent, setIsStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
        // This is the Control
        function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {
            setIsHappy(event.target.checked)
        }

        // This is the View
            <Form.Check
                type="checkbox"
                id="is-happy-check"
                label="Happy?"
                checked={isHappy}
                onChange={updateHappiness}
            />
        </div>
    );
}
