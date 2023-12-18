import React from "react";
import { render, screen } from "@testing-library/react";
import { Class } from "../interfaces/class";
import sample from "../data/allClasses.json";
import App from "../App";

const CLASSES = sample.map(
    (courses): Class => ({ ...courses, breadth: courses.breadth || "null" })
);

describe("Project Component tests", () => {
    beforeEach(() => {
        render(<App />);
    });

    test("Adding classes to a semester", () => {
        const planButton = screen.getByText("Create New Degree Plan");
        const viewButton = screen.getByText("View Semesters");
        planButton.click();
        const thePlan = screen.getByText("Plan 1");
        thePlan.click();
        viewButton.click();
        expect(
            screen.queryByText(
                "Search for your course, or manually input your course."
            )
        );
        const class1 = CLASSES[2].courseCode;
        const class2 = "RED234";
        const input1 = screen.getByTestId("courseCode");
        const button = screen.getByText("Search");
        input1.setAttribute("value", class1);
        button.click();

        expect(
            screen.queryByText(
                "Introduction to Computer Science II\n" + class1 + "\n3 Credits"
            )
        );
        input1.setAttribute("value", class2);
        button.click();
        expect(
            screen.queryByText(
                "No Course Found. Please Try Again or Use The Form"
            )
        );
    });

    test("Add semesters", () => {
        const addSem = "Spring 2026";
        const planButton = screen.getByText("Create New Degree Plan");
        const viewButton = screen.getByText("View Semesters");
        planButton.click();
        const thePlan = screen.getByText("Plan 1");
        thePlan.click();
        viewButton.click();
        expect(
            screen.queryByText(
                "Search for your course, or manually input your course."
            )
        );
        const enterButton = screen.getByText("Enter");
        enterButton.click();
        const checkbox = screen.getByTestId("semesters");
        checkbox.click();
        expect(screen.queryByText(addSem));
        expect(screen.queryByText("Course"));
        expect(screen.queryByText("Number of Credits"));
    });

    test("Clearing semesters", () => {
        const planButton = screen.getByText("Create New Degree Plan");
        const viewButton = screen.getByText("View Semesters");
        planButton.click();
        const thePlan = screen.getByText("Plan 1");
        thePlan.click();
        viewButton.click();
        expect(
            screen.queryByText(
                "Search for your course, or manually input your course."
            )
        );
        const addSemester = "Fall 2027";
        const testClass = CLASSES[1].courseCode;
        const enterButton = screen.getByText("Enter");
        enterButton.click();
        const checkbox = screen.getByTestId("semesters");
        checkbox.click();
        expect(screen.queryByText(addSemester));
        expect(screen.queryByText("Course"));
        expect(screen.queryByText("Number of Credits"));
        expect(screen.queryByText(testClass));
        expect(screen.queryByText("3"));
        const clearButton = screen.getByText("Clear Existing Semesters");
        clearButton.click();
        expect(screen.queryByText(" "));
    });

    test("Deleting course from a semester", () => {
        const planButton = screen.getByText("Create New Degree Plan");
        const viewButton = screen.getByText("View Semesters");
        planButton.click();
        const thePlan = screen.getByText("Plan 1");
        thePlan.click();
        viewButton.click();
        expect(
            screen.queryByText(
                "Search for your course, or manually input your course."
            )
        );

        const addSemester = "Spring 2028";
        const testClass = CLASSES[3].courseCode;
        const enterButton = screen.getByText("Enter");
        enterButton.click();
        const checkbox = screen.getByTestId("semesters");
        checkbox.click();
        expect(screen.queryByText(addSemester));
        expect(screen.queryByText("Course"));
        expect(screen.queryByText("Number of Credits"));
        expect(screen.queryByText("1"));
        expect(screen.queryByText(testClass));
        const deleteButton = screen.getByText("Clear All Classes in");
        deleteButton.click();
        expect(screen.queryByText(" "));
    });
});
