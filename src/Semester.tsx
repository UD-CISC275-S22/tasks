import React, { useState } from "react";

type Semester = {
    id: number;
    name: string;
};

export function addSemester(
    semesters: Semester[],
    setSemesters: (semesters: Semester[]) => void,
    newSemester: string,
    setNewSemester: (newSemester: string) => void
) {
    if (newSemester) {
        const newSemesterObj: Semester = {
            id: Date.now(),
            name: newSemester
        };
        setSemesters([...semesters, newSemesterObj]);
        setNewSemester("");
    }
}

export function deleteSemester(
    semesters: Semester[],
    setSemesters: (semesters: Semester[]) => void,
    id: number
) {
    const updatedSemesters = semesters.filter((semester) => semester.id !== id);
    setSemesters(updatedSemesters);
}

export default function App() {
    const [semesters, setSemesters] = useState<Semester[]>([]);
    const [newSemester, setNewSemester] = useState<string>("");

    return (
        <div>
            <h1>Semester Tracker</h1>
            <div>
                <input
                    type="text"
                    value={newSemester}
                    onChange={(e) => setNewSemester(e.target.value)}
                    placeholder="Add a semester"
                />
                <button
                    onClick={() =>
                        addSemester(
                            semesters,
                            setSemesters,
                            newSemester,
                            setNewSemester
                        )
                    }
                >
                    Add
                </button>
            </div>
            <ul>
                {semesters.map((semester) => (
                    <li key={semester.id}>
                        {semester.name}
                        <button
                            onClick={() =>
                                deleteSemester(
                                    semesters,
                                    setSemesters,
                                    semester.id
                                )
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
