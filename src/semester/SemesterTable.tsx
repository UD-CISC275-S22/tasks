import React, { useState } from "react";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { SemesterView } from "./SemesterView";
import { Button } from "react-bootstrap";

//CISC275 Tome and StackOverflow link that was given was used to build this code.
//https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side/68146412#68146412
//TBD and not finished. Takes in the current semesters and attempts to create a csv
function arrayToCSV(data: semester[][]) {
    return data
        .map((row) =>
            row
                .map((v) => {
                    if (typeof v === "object" && v !== null) {
                        return JSON.stringify(v)
                            .replaceAll(/['"]+/g, "")
                            .replace(/[{}]/g, "");
                    }
                    //double quotes are given prettier errors. Just needed for deployment purposes. Will be fixed for future sprint.
                    // eslint-disable-next-line quotes
                    return String(v).replace(/"/g, '""');
                })
                .map((v) => `${v}`)
                .join("\n")
        )
        .join("\n");
}

//CISC275 Tome and StackOverflow link that was given was used to build this code.
//https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side/68146412#68146412
//download plan as a filename. Prettier error will fixed by end of sprint.
function downloadBlob(
    content: BlobPart,
    filename: string,
    contentType: string
) {
    // Create a blob
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);

    // Create a link to download it
    const pom = document.createElement("a");
    pom.href = url;
    pom.setAttribute("download", filename);
    pom.click();
}

//Created a function to map all the given semesters into their own view.
export function SemesterTable({
    semesters,
    setSemesters
}: {
    semesters: semester[];
    setSemesters: (sems: semester[]) => void;
}): JSX.Element {
    //drag course is being used for ability to drag. Not complete yet.
    const [dragCourse, setDragCourse] = useState<classes>();
    const csv = arrayToCSV([semesters]);
    const download = () => {
        downloadBlob(csv, ".csv", "text/csv;charset=utf-8;");
    };

    //Clears Semesters
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
    function clearCourses(semester: semester): void {
        const updatedSemester = { ...semester, classList: [] };
        const semesterIndex = semesters.findIndex(
            (semesterItem: semester): boolean => semesterItem.id === semester.id
        );
        const s_copy = semesters.map((sem) => ({
            ...sem,
            classList: [...sem.classList]
        }));
        s_copy.splice(semesterIndex, 1, updatedSemester);
        setSemesters(s_copy);
    }
    function clearCourseFromSemester(semester: semester): void {
        const semesterIndex = semesters.findIndex(
            (semesterItem: semester): boolean => semesterItem.id === semester.id
        );
        const s_copy = semesters.map((sem) => ({
            ...sem,
            classList: [...sem.classList]
        }));
        s_copy.splice(semesterIndex, 1, semester);
        setSemesters(s_copy);
    }

    //Handles drop and what happens when the element is let go from the mouse
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
                if (
                    foundSemester.classList.every(
                        (classes: classes): boolean =>
                            classes.code !== dragCourse.code
                    )
                ) {
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
                    updatedSemesters.splice(
                        findSemesterIndex,
                        1,
                        updatedSemester
                    );
                    console.log(updatedSemesters);
                    setSemesters(updatedSemesters);
                }
            }
        }
    };
    //handles when it is being dragged.
    const handleOnDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        console.log(dragCourse);
    };

    <Button onClick={download}>download</Button>;

    return (
        <div className="semesterTable">
            <h2>Semester Schedule</h2>
            <Button onClick={download}>download</Button>

            {semesters.map((semester) => {
                return (
                    <SemesterView
                        key={semester.id}
                        semester={semester}
                        handleOnDragOver={(e) => handleOnDragOver(e)}
                        handleOnDrop={(e) => handleOnDrop(e, semester.id)}
                        clearSemester={clearSemester}
                        setDragCourse={setDragCourse}
                        clearCourses={clearCourses}
                        clearCourseFromSemester={clearCourseFromSemester}
                    ></SemesterView>
                );
            })}
        </div>
    );
}
