import React from "react";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { SemesterView } from "./SemesterView";
import { fireEvent, render, screen } from "@testing-library/react";

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
    season: "Fall 2023"
};

describe("SemesterView", () => {
    const DragOverHandler = jest.fn();
    const DropHandler = jest.fn();
    const clearSemesterHandler = jest.fn();
    clearSemesterHandler.mockImplementation(() => {
        semesterExample.classList = [];
    });
    const setDragCourseHandler = jest.fn();

    // beforeEach(() => {
    //     render(
    //         <SemesterView
    //             key={semesterExample.id}
    //             semester={semesterExample}
    //             handleOnDragOver={DragOverHandler}
    //             handleOnDrop={DropHandler}
    //             clearSemester={clearSemesterHandler}
    //             setDragCourse={setDragCourseHandler}
    //             clearCourses={jest.fn()}
    //             updateSemester={jest.fn()}
    //         />
    //     );
    // });
    test("SemesterView renders a heading with the season of the semester.", () => {
        screen.getByRole("heading", { name: semesterExample.season });
    });

    test("ClearSemester is called after clicking button, and the semester is cleared.", () => {
        const clearSemesterButton = screen.getByRole("button", {
            name: /Clear Semester/i
        });
        fireEvent.click(clearSemesterButton);
        expect(clearSemesterHandler).toHaveBeenCalled();
        /*
        expect(
            screen.queryByText(semesterExample.season)
        ).not.toBeInTheDocument();
        */
    });

    test("ClearCourses is called after clicking button.", () => {
        const clearCoursesButton = screen.getByRole("button", {
            name: /Clear Courses/i
        });
        fireEvent.click(clearCoursesButton);
        const classExample = semesterExample.classList[0].title;
        expect(screen.queryByText(classExample)).not.toBeInTheDocument();
    });
});
