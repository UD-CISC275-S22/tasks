import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [inEdit, setInEdit] = useState<boolean>(false);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function editMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEdit(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="in-edit"
                    label="Edit Mode"
                    checked={inEdit}
                    onChange={editMode}
                />
                {inEdit && (
                    <form>
                        <label>
                            Name:
                            <input
                                type="text"
                                id="name"
                                onChange={updateName}
                                //name="name"
                                value={name}
                            />
                            {/* <Button onClick={editMode}>Check Answer</Button> */}
                        </label>

                        <label>
                            Is Student?
                            <input
                                type="checkbox"
                                id="student?"
                                checked={isStudent}
                                onChange={updateIsStudent}
                            />
                        </label>
                    </form>
                )}
            </div>
            {!inEdit ? (
                <>
                    {name} is {isStudent ? "" : "not"} a student
                </>
            ) : null}
        </div>
    );
}
