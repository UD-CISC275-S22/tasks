import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Some HTML Elements are added.", () => {
    test("(2 pts) There is a header", () => {
        render(<App />);
        const header = screen.getByRole("heading");
        expect(header).toBeInTheDocument();
    });

    test("(2 pts) There is an image with alt text", () => {
        render(<App />);
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("alt");
    });

    test("(2 pts) There is a list with at least three elements", () => {
        render(<App />);
        const list = screen.getByRole("list");
        expect(list).toBeInTheDocument();
        expect(list.children.length).toBeGreaterThanOrEqual(3);
    });
});

describe("(2 pts) Some basic CSS is added.", () => {
    test("The background color of the header area is different", () => {
        render(<App />);
        const banner = screen.getByRole("banner");
        expect(banner).not.toHaveStyle({
            "background-color": "rgb(40, 44, 52)",
        });
    });
});

describe("(2 pts) Some Bootstrap Elements are added", () => {
    test("There is one bootstrap button with the text 'Log Hello World'", () => {
        render(<App />);
        const button = screen.getByRole("button", { name: /Log Hello World/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("btn");
        expect(button).toHaveClass("btn-primary");
    });

    test("(2 pts) Not clicking the bootstrap button does not logs 'Hello World!'", () => {
        const consoleSpy = jest.spyOn(console, "log");
        render(<App />);
        expect(consoleSpy).not.toHaveBeenCalledWith("Hello World!");
    });

    test("(2 pts) Clicking the bootstrap button logs 'Hello World!'", () => {
        const consoleSpy = jest.spyOn(console, "log");
        render(<App />);
        const button = screen.getByRole("button", { name: /Log Hello World/i });
        userEvent.click(button);
        expect(consoleSpy).toHaveBeenCalledWith("Hello World!");
    });
});

describe("Some additional CSS was added", () => {
    test("(2 pts) checks if any element has a background color of red", () => {
        const { container } = render(<App />);
        // Get all elements in the rendered container
        const elements = container.querySelectorAll("*");

        // Check if any element has a background color of red
        let foundRedBackground = false;

        elements.forEach((element) => {
            const style = getComputedStyle(element);
            if (
                style.backgroundColor === "red" ||
                style.backgroundColor === "rgb(255, 0, 0)"
            ) {
                foundRedBackground = true;
            }
        });

        expect(foundRedBackground).toBe(true);
    });
});
