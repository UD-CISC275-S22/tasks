import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    //has 2 states controlled by a switch; default state: text indicating the user's name and whether they are a student
    //alternate state: editable form for editing the user's name and whether they are a student

    //state: handle the component being in "edit mode", the user's name, and whether or not the user is a student
    //INITIALLY: the component is NOT in edit moode, the user's name is literally the string "Your name" and the user IS a student

    //state
    const [editMode, setEditMode] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    //control
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-in-edit-mode"
                label="edit?"
                checked={editMode}
                onChange={updateEdit}
            />
            <div>
                {isStudent
                    ? "{name} is a student."
                    : "{name} is not a student."}
                .
            </div>
        </div>
    );
}
