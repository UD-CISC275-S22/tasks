import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders the sketch", () => {
        const imageShow = screen.getAllByAltText("App Sketch");
        expect(imageShow).toEqual("App Sketch");
    });
});
