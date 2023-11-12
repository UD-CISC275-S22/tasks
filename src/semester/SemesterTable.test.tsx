import React from "react";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { SemesterView } from "./SemesterView";
import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

const classExamples: classes[] = [
    {
        code: "CISC181",
        title: "Introduction to Computer Science II",
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

describe("SemesterTable", () => {
    const DragOverHandler = jest.fn();
    const DropHandler = jest.fn();
    const clearSemesterHandler = jest.fn();
    const setDragCourseHandler = jest.fn();

    beforeEach(() => {
        render(
            <SemesterView
                key={semesterExample.id}
                semester={semesterExample}
                handleOnDragOver={DragOverHandler}
                handleOnDrop={DropHandler}
                clearSemester={clearSemesterHandler}
                setDragCourse={setDragCourseHandler}
            />
        );
    });
    test("Users can see a lists of courses, including the course code, title, credits, and prerequisites.", () => {
        const classExample = semesterExample.classList;
        for (let i = 0; i < classExamples.length; i++) {
            expect(
                screen.queryByText(classExample[i].code)
            ).toBeInTheDocument();
            expect(
                screen.queryByText(classExample[i].title.length, {
                    exact: false
                })
            ).toBeInTheDocument();
            expect(
                screen.queryByText(classExample[i].credits, {
                    exact: false
                })
            ).toBeInTheDocument();
            expect(
                screen.queryByText(classExample[i].preReq.length, {
                    exact: false
                })
            ).toBeInTheDocument();
        }
    });
    test("Users can see a lists of courses, including the course code, title, credits, and prerequisites.", () => {
        const clearButton = screen.getByRole("button", {
            name: /Clear Courses/i
        });
        user.click(clearButton);
        const classes = screen.getByTestId("classes");
        expect(classes).toBeNull();
    });
    test("Clears courses after pressing a button.", () => {
        const clearButton = screen.getByRole("button", {
            name: "Clear Courses"
        });
        fireEvent.click(clearButton);
        expect(semesterExample.classList).toHaveLength(0);
    });
});
