import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="isEditMode?"
                checked={isEdit}
                onChange={updateEditMode}
            />
            {isEdit ?
                <div>
                    <Form.Group controlId="name">
                        <Form.Label>Enter name: </Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={updateName}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            :   <div>
                    {`${userName} ${isStudent ? "is" : "is not"} a student`}
                </div>
            }
        </div>
    );
}
