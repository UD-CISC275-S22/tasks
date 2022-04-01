import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isediting, setIsEditing] = useState<boolean>(false);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <>
            <div>
                <h3>Edit Mode</h3>
                <div>
                    <Form.Check
                        type="switch"
                        id="is-editing"
                        label="Editing"
                        checked={isediting}
                        onChange={() => setIsEditing(!isediting)}
                    />
                </div>
            </div>
            <div>
                {isediting ? (
                    <div>
                        <Form.Group controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>

                        <Form.Check
                            type="checkbox"
                            id="is-student"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                    </div>
                ) : (
                    <div>
                        <span>
                            {name}{" "}
                            {isStudent ? " is a student" : " is not a student"}
                        </span>
                    </div>
                )}
            </div>
        </>
    );
}
