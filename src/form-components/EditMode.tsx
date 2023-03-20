import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [editMode, setEdit] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    return (
        <div>
            <div className="card">
                {name === "" ? "Your Name" : name} is {!isStudent ? "not" : ""}{" "}
                a student
            </div>
            <Form.Check
                type="switch"
                id="edit-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(e: ChangeEvent) =>
                    setEdit((e.target as HTMLInputElement).checked)
                }
            />
            {editMode && (
                <div className="box">
                    <Form.Check
                        type="checkbox"
                        id="edit-student-check"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={() => setStudent(!isStudent)}
                    ></Form.Check>
                    <Form.Group className="mb-3" controlId="formUserName">
                        <Form.Label>What is your name?</Form.Label>
                        <Form.Control
                            type="textarea"
                            placeholder="Enter your name."
                            value={name}
                            onChange={(e: ChangeEvent) =>
                                setName(e.target.value)
                            }
                        />
                    </Form.Group>
                </div>
            )}
        </div>
    );
}
