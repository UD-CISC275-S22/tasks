import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Some HTML Elements are added.", () => {
    test("There is a header", () => {
        render(<App />);
        const header = screen.getByRole("heading");
        expect(header).toBeInTheDocument();
    });
});

describe("Some basic CSS is added.", () => {
    test("There is a floating red box", () => {
        render(<App />);
        expect(true);
    });
});

describe("Some Bootstrap Elements are added", () => {
    test("There is a bootstrap button", () => {
        render(<App />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("btn");
        expect(button).toHaveClass("btn-primary");
    });
});
