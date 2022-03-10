import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

function ViewMode({
    name,
    isStudent
}: {
    name: string;
    isStudent: boolean;
}): JSX.Element {
    return (
        <div>
            {name} is {isStudent ? "" : "not "}a student.
        </div>
    );
}

function StudentSwitch({
    isStudent,
    setIsStudent
}: {
    isStudent: boolean;
    setIsStudent: (newVal: boolean) => void;
}): JSX.Element {
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="check-student"
                label="Student?"
                checked={isStudent}
                onChange={updateStudent}
            ></Form.Check>
        </div>
    );
}

function StudentForm({
    name,
    setName,
    isStudent,
    setIsStudent
}: {
    name: string;
    setName: (newVal: string) => void;
    isStudent: boolean;
    setIsStudent: (newVal: boolean) => void;
}): JSX.Element {
    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formStudentName">
                <Form.Label>Enter Name:</Form.Label>
                <Form.Control value={name} onChange={updateName}></Form.Control>
            </Form.Group>
            <div>
                <StudentSwitch
                    isStudent={isStudent}
                    setIsStudent={setIsStudent}
                ></StudentSwitch>
            </div>
        </div>
    );
}

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {editMode ? (
                <StudentForm
                    name={name}
                    setName={setName}
                    isStudent={isStudent}
                    setIsStudent={setIsStudent}
                />
            ) : (
                <ViewMode name={name} isStudent={isStudent} />
            )}
            <Form.Check
                type="switch"
                id="edit-check"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
        </div>
    );
}
