import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    //this the States
    const [inEditMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    //This the Controls

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        //updates checkbox
        setStudent(event.target.checked);
    }

    function updateEditModeState(event: React.ChangeEvent<HTMLInputElement>) {
        //updates switch
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    //This the Views
    return (
        <div>
            <h3>EditMode</h3>
            <Form.Group>
                <Form.Check
                    type="switch"
                    checked={inEditMode}
                    onChange={updateEditModeState}
                />
            </Form.Group>
            <br></br>
            {inEditMode === true ? (
                <div>
                    <Form.Control value={name} onChange={updateName} />
                    <Form.Group controlId="is-student">
                        <Form.Label>Student</Form.Label>
                        <Form.Check
                            type="checkbox"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    </Form.Group>
                </div>
            ) : (
                <div>
                    {name} {isStudent ? "is a student" : "is not a student"}
                </div>
            )}
        </div>
    );
}
