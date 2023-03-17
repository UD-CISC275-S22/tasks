import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [inEdit, setInEdit] = useState<boolean>(false);

    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function changeIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function changeEditMode() {
        setInEdit(!inEdit);
    }
    return (
        <div>
            {inEdit ? (
                <div>
                    <span>
                        {" "}
                        {name} is {isStudent ? "a student" : "not a student"}
                    </span>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={changeName}
                            />
                        </Form.Group>
                        <Form.Group controlId="formIsStudent">
                            <Form.Check
                                type="checkbox"
                                label="Is Student"
                                checked={isStudent}
                                onChange={changeIsStudent}
                            />
                        </Form.Group>
                        <Form.Group controlId="formChangeMode">
                            <Form.Check
                                type="switch"
                                label="Toggle Edit Mode"
                                checked={inEdit}
                                onChange={changeEditMode}
                            />
                        </Form.Group>
                    </Form>
                </div>
            ) : (
                <div>
                    <span>
                        {" "}
                        {name} is {isStudent ? "a student" : "not a student"}
                    </span>
                    <Form.Group controlId="formChangeMode">
                        <Form.Check
                            type="switch"
                            label="Toggle Edit Mode"
                            checked={inEdit}
                            onChange={changeEditMode}
                        />
                    </Form.Group>
                </div>
            )}
        </div>
    );
}
