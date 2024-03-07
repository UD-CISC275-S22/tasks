import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your name");
    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="center">
                <Form.Check
                    type="switch"
                    id="is-editing"
                    label="Editing?"
                    checked={editing}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEditing(event.target.checked)
                    }
                />
            </div>
            {editing === true ? (
                <div className="center">
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Is a student?"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setStudent(event.target.checked)}
                    />
                </div>
            ) : null}
            {student === true ? (
                <p>{name} is a student</p>
            ) : (
                <p>{name} is not a student</p>
            )}
        </div>
    );
}
