import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [editable, setEditable] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateInput(event: ChangeEvent): void {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="changeMode"
                label="Edit?"
                checked={editable}
                onChange={() => setEditable(!editable)}
            />
            {editable && (
                <Form.Check
                    type="switch"
                    id="isStudent"
                    label="Student?"
                    checked={student}
                    disabled={!editable}
                    onChange={() => setStudent(!student)}
                />
            )}
            {editable && (
                <Form.Group controlId="nameResponse">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={updateInput}
                        disabled={!editable}
                    />
                </Form.Group>
            )}
            {!editable && student && <div>{name} is a student</div>}
            {!editable && !student && <div>{name} is not a student</div>}
        </div>
    );
}
