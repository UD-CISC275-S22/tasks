import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { ColoredBox } from "./ColoredBox";

describe("ColoredBox Component tests", () => {
    beforeEach(() => {
        render(<ColoredBox />);
    });
    test("(2 pts) The ColoredBox is initially red.", () => {
        const box = screen.getByTestId("colored-box");
        expect(box).toHaveStyle({ backgroundColor: "red" });
    });
    test("(2 pts) There is a button", () => {
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
    test("(2 pts) Clicking the button advances the color.", async () => {
        const nextColor = screen.getByRole("button");
        await act(async () => {
            nextColor.click();
        });
        expect(screen.getByTestId("colored-box")).toHaveStyle({
            backgroundColor: "blue",
        });
        await act(async () => {
            nextColor.click();
        });
        expect(screen.getByTestId("colored-box")).toHaveStyle({
            backgroundColor: "green",
        });
        await act(async () => {
            nextColor.click();
        });
        expect(screen.getByTestId("colored-box")).toHaveStyle({
            backgroundColor: "red",
        });
    });
});
