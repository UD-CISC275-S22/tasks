import React from "react";
import sample from "../data/data.json";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { SemesterView } from "./SemesterView";
import { render, screen } from "@testing-library/react";

const semesterExamples = sample.map(
    (sem): semester => ({
        ...sem,
        classList: sem.classList.map(
            (c): classes => ({
                ...c
            })
        )
    })
);

const classExamples: classes[] = [
    {
        code: "CISC210",
        title: "Introduction to Systems Programming",
        credits: 3,
        preReq: ["CISC108"]
    },
    {
        code: "CISC220",
        title: "Data Structures",
        credits: 3,
        preReq: ["CISC210"]
    }
];

const semesterExample: semester = {
    id: 1,
    fullTime: true,
    classList: classExamples,
    totalCredits: 6,
    season: "Fall"
};

const handleOnDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log(dragCourse);
};
const handleOnDrop = (event: React.DragEvent<HTMLDivElement>, id: number) => {
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

describe("SemesterView", () => {
    beforeEach(() => {
        render(
            <SemesterView
                key={semesterExample.id}
                semester={semesterExample}
                handleOnDragOver={(e) => handleOnDragOver(e)}
                handleOnDrop={(e) => handleOnDrop(e, sem.id)}
                clearSemester={clearSemester}
                setDragCourse={setDragCourse}
            />
        );
    });
    test("Users can add a new quiz", () => {});
});
