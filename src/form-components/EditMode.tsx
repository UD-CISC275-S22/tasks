import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setit] = useState<boolean>(false);
    const [name, setname] = useState<string>("Your Name");
    const [student, setstud] = useState<boolean>(true);
    function updatename(event: React.ChangeEvent<HTMLInputElement>) {
        setname(event.target.value);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="editModeSwitch"
                label="Edit Mode"
                checked={edit}
                onChange={() => setit(!edit)}
            />
            {edit ? (
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updatename} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="StudentCheck"
                        label="is a student?"
                        checked={student}
                        onChange={() => setstud(!student)}
                    />
                </div>
            ) : (
                <span>
                    {name} is {student ? "" : "not"} a student
                </span>
            )}
        </div>
    );
}
