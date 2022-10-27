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
            {name} is {isStudent ? " " : "not "}a student at the University of
            Delaware.
        </div>
    );
}

function ChangeStudent({
    isStudent,
    setStudent
}: {
    isStudent: boolean;
    setStudent: (newValue: boolean) => void;
}): JSX.Element {
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
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

function StudentNameQuestion({
    name,
    setName,
    isStudent,
    setStudent
}: {
    name: string;
    setName: (newVal: string) => void;
    isStudent: boolean;
    setStudent: (newVal: boolean) => void;
}): JSX.Element {
    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formStudentName">
                <Form.Label>Enter your name:</Form.Label>
                <Form.Control value={name} onChange={updateName}></Form.Control>
            </Form.Group>
            <div>
                <ChangeStudent
                    isStudent={isStudent}
                    setStudent={setStudent}
                ></ChangeStudent>
            </div>
        </div>
    );
}

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    return (
        <div>
            <h5>Edit Mode</h5>
            {edit ? (
                <StudentNameQuestion
                    name={name}
                    setName={setName}
                    isStudent={student}
                    setStudent={setStudent}
                />
            ) : (
                <ViewMode name={name} isStudent={student} />
            )}
            <Form.Check
                type="switch"
                id="edit-check"
                label="Edit Mode"
                checked={edit}
                onChange={updateEditMode}
            />
        </div>
    );
}
