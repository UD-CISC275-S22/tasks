import React from "react";
import { render, screen } from "@testing-library/react";
import { Class } from "../interfaces/class";
import sample from "../data/allClasses.json";
import App from "../App";

//Need the sample to map through the data
const CLASSES = sample.map((courses): Class => ({ ...courses }));

describe("Project Component tests", () => {
    beforeEach(() => {
        render(<App />);
    });

    test("Adding classes to a semester", () => {
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
        const input = screen.getByTestId("year");
        const enterButton = screen.getByText("Enter");
        input.setAttribute("value", addSem);
        enterButton.click();
        const checkbox = screen.getByTestId("semesters");
        checkbox.click();
        expect(screen.queryByText(addSem));
        expect(screen.queryByText("Course"));
        expect(screen.queryByText("Number of Credits"));
    });

    test("Removing semesters", () => {
        //make a list of semesters, indicate the originl length
        //once button is clicked, information should be removed
    });

    test("Clearing semesters", () => {
        //make a list of semesters, indicate the originl length
        //once button is clicked, semesters should be cleared(length 0)
    });
});
