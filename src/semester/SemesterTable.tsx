/* eslint-disable no-var */
/* eslint-disable quotes */
import React, { useState } from "react";
import sample from "../data/data.json";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { dateTime } from "../Interface/dateTime";
import { SemesterView } from "./SemesterView";
import { Button } from "react-bootstrap";

const semesterExamples = sample.map(
    (sem): semester => ({
        ...sem,
        classList: sem.classList.map(
            (c): classes => ({
                ...c,
                schedule: c.schedule as dateTime
            })
        )
    })
);

//CISC275 Tome and StackOverflow link that was given was used to build this code.
function arrayToCSV(data: semester[][]) {
    return data
        .map((row) =>
            row
                .map((v: any) => {
                    if (typeof v === "object" && v !== null) {
                        return JSON.stringify(v)
                            .replaceAll(/['"]+/g, "")
                            .replace(/[{}]/g, "");
                    }
                    return String(v).replace(/"/g, `""`);
                })
                .map((v: any) => `${v}`)
                .join("\n")
        )
        .join("\n");
}

//CISC275 Tome and StackOverflow link that was given was used to build this code.
function downloadBlob(content: BlobPart, filename: string, contentType: any) {
    // Create a blob
    var blob = new Blob([content], { type: contentType });
    var url = URL.createObjectURL(blob);

    // Create a link to download it
    var pom = document.createElement("a");
    pom.href = url;
    pom.setAttribute("download", filename);
    pom.click();
}

export function SemesterTable(): JSX.Element {
    const [semesters, setSemesters] = useState<semester[]>(semesterExamples);
    const [dragCourse, setDragCourse] = useState<classes>();
    const csv = arrayToCSV([semesters]);
    const download = () => {
        downloadBlob(csv, ".csv", "text/csv;charset=utf-8;");
    };
    function reset() {
        console.log(semesters);
        setSemesters(semesterExamples);
    }
    function refresh() {
        console.log(semesters);
        setSemesters([...semesters]);
    }
    function clearSemester(id: number): void {
        const semesterIndex = semesters.findIndex(
            (semester: semester): boolean => semester.id === id
        );
        const s_copy = semesters.map((sem) => ({
            ...sem,
            classList: [...sem.classList]
        }));
        s_copy.splice(semesterIndex, 1);
        setSemesters(s_copy);
    }
    const handleOnDrop = (
        event: React.DragEvent<HTMLDivElement>,
        id: number
    ) => {
        event.preventDefault();
        console.log("Drop");
        console.log(dragCourse);
        if (dragCourse !== undefined) {
            const findSemesterIndex = semesters.findIndex(
                (sem: semester): boolean => sem.id === id
            );
            const foundSemester = semesters[findSemesterIndex];
            if (foundSemester !== undefined) {
                const updatedSemester = {
                    ...foundSemester,
                    classList: [...foundSemester.classList, dragCourse]
                };
                console.log(updatedSemester.classList);
                console.log(semesters);
                const updatedSemesters = semesters.map(
                    (semester: semester): semester => ({
                        ...semester,
                        classList: [...semester.classList]
                    })
                );
                updatedSemesters.splice(findSemesterIndex, 1, updatedSemester);
                console.log(updatedSemesters);
                setSemesters(updatedSemesters);
            }
        }
    };
    const handleOnDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        console.log(dragCourse);
    };

    return (
        <div className="semesterTable">
            <h2>Semester Schedule</h2>
            <Button onClick={download}>download</Button>

            {semesters.map((sem) => {
                return (
                    <SemesterView
                        key={sem.id}
                        semester={sem}
                        handleOnDragOver={(e) => handleOnDragOver(e)}
                        handleOnDrop={(e) => handleOnDrop(e, sem.id)}
                        clearSemester={clearSemester}
                        setDragCourse={setDragCourse}
                    ></SemesterView>
                );
            })}
            <button
                onClick={() => {
                    reset();
                }}
            >
                {" "}
                reset
            </button>
            <button
                onClick={() => {
                    refresh();
                }}
            >
                {" "}
                refresh
            </button>
        </div>
    );
}
