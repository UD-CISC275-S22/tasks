import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import sample from "./data/data.json";
import { semester } from "./Interface/semester";
import { classes } from "./Interface/classes";
import userEvent from "@testing-library/user-event";

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

const classExamples = semesterExamples[1].classList;

test("renders the course name somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/CS/i);
    expect(linkElement).toBeInTheDocument();
});
/*
describe("SemesterView Tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    const enterButton = screen.getByRole("Button", { name: /OK/ });
    const inputBox = screen.getByRole("textbox");
    userEvent.type(inputBox, "Ray");
    enterButton.click();
    const text = screen.getByText("Add Degree Plan");
    text.click();
    test("Users can see a lists of courses, including the course code, title, credits, and prerequisites.", () => {
        for (let i = 0; i < classExamples.length; i++) {
            expect(
                screen.queryByText(classExamples[i].code)
            ).toBeInTheDocument();
            expect(
                screen.queryByText(
                    classExamples[i].title.length + " question",
                    { exact: false }
                )
            ).toBeInTheDocument();
            expect(
                screen.queryByText(classExamples[i].credits, { exact: false })
            ).toBeInTheDocument();
            expect(
                screen.queryByText(classExamples[i].preReq.length, {
                    exact: false
                })
            ).toBeInTheDocument();
        }
    });
    
    
});
*/
