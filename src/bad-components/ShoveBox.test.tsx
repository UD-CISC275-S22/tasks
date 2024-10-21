import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { ShoveBox } from "./ShoveBox";

describe("ShoveBox Component tests", () => {
    beforeEach(() => {
        render(<ShoveBox />);
    });
    test("(2 pts) The MoveableBox is initially nearby.", () => {
        const box = screen.getByTestId("moveable-box");
        expect(box).toHaveStyle({ marginLeft: "10px" });
    });
    test("(2 pts) There is a button", () => {
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
    test("(2 pts) Clicking the button moves the box.", async () => {
        const shoveBox = screen.getByRole("button");
        await act(async () => {
            shoveBox.click();
        });
        expect(screen.getByTestId("moveable-box")).toHaveStyle({
            marginLeft: "14px",
        });
        await act(async () => {
            shoveBox.click();
        });
        expect(screen.getByTestId("moveable-box")).toHaveStyle({
            marginLeft: "18px",
        });
        await act(async () => {
            shoveBox.click();
        });
        expect(screen.getByTestId("moveable-box")).toHaveStyle({
            marginLeft: "22px",
        });
    });
});
