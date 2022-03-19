import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface visible {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

interface name {
    name: string;
    setName: (name: string) => void;
}

interface student {
    student: boolean;
    setStudent: (student: boolean) => void;
}

function UpdateName({ name, setName }: name): JSX.Element {
    return (
        <div>
            <Form.Control
                value={name}
                onChange={(event: ChangeEvent) => setName(event.target.value)}
            />
        </div>
    );
}

function UpdateVisibility({ visible, setVisible }: visible): JSX.Element {
    function updatevisibility(event: ChangeEvent) {
        setVisible(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="is-visible"
                label={visible ? "EditMode On" : "EditMode Off"}
                checked={visible}
                onChange={updatevisibility}
            />
        </div>
    );
}

function UpdateStudent({ student, setStudent }: student): JSX.Element {
    function updatestudent(event: ChangeEvent) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="is-student"
                label="Are you a student?"
                checked={student}
                onChange={updatestudent}
            />
        </div>
    );
}

export function EditMode(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            {name} is {student === false ? " not" : ""} a student.
            <div>
                <UpdateVisibility
                    visible={visible}
                    setVisible={setVisible}
                ></UpdateVisibility>{" "}
                {visible && (
                    <div>
                        <UpdateName name={name} setName={setName}></UpdateName>
                        <UpdateStudent
                            student={student}
                            setStudent={setStudent}
                        ></UpdateStudent>
                    </div>
                )}
            </div>
        </div>
    );
}
