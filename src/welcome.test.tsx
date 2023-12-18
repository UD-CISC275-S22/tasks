import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Welcome screen test", () => {
    test("renders the welcome message", () => {
        render(<App />);
        const linkElement = screen.getByText(
            /Welcome to the University of Delaware Course Scheduler!/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Check for enter name textbox", () => {
        render(<App />);
        const textBox = screen.getByRole("textbox");
        expect(textBox).toBeInTheDocument();
    });

    test("Check for enter name OK button", () => {
        render(<App />);
        const okButton = screen.getByRole("button", { name: /OK/i });
        expect(okButton).toBeInTheDocument();
    });

    test("Check that empty box raises error message", async () => {
        render(<App />);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const mockAlert = jest
            .spyOn(window, "alert")
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            .mockImplementation(() => {});
        const okButton = screen.getByRole("button");
        userEvent.click(okButton);
        expect(mockAlert).toHaveBeenCalledWith("Please enter a valid name.");
        mockAlert.mockRestore();
    });

    // test("Check that you can type into welcome box", async () => {
    //     render(<App />);
    //     const textBox = screen.getByRole("textbox");
    //     const okButton = screen.getByRole("button", { name: /OK/i });
    //     // fireEvent.change(textBox, { target: { value: "Test" } });
    //     userEvent.type(textBox, "Test");
    //     userEvent.click(okButton);
    //     await waitFor(() => {
    //         expect(
    //             screen.queryByText(
    //                 /Welcome to the University of Delaware Course Scheduler/i
    //             )
    //         );

    //         expect(screen.getByText(/Degree Audit/i)).toBeInTheDocument();
    //     });
    // });
});
