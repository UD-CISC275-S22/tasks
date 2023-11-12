import React from "react";
import { render, screen } from "@testing-library/react";
import { FilteringSearch } from "./FilteringSearch";
import userEvent from "@testing-library/user-event";

describe("FilteringSearchTests", () => {
    test("render the search box", () => {
        render(<FilteringSearch />);
        const textBox = screen.getByRole("textbox");
        expect(textBox).toBeInTheDocument();
    });
    test("placeholder check", () => {
        render(<FilteringSearch />);
        const placeholder = screen.getByPlaceholderText(
            /Search By Course Code/i
        );
        expect(placeholder).toBeInTheDocument();
    });
    test("Complete list rendered and display", () => {
        render(<FilteringSearch />);
        const textBox = screen.getByRole("textbox");
        userEvent.click(textBox);
        expect(screen.getByText(/MATH242/i)).toBeInTheDocument();
        expect(screen.getByText(/CISC210/i)).toBeInTheDocument();
        expect(screen.getByText(/STAT200/i)).toBeInTheDocument();
        expect(screen.getByText(/ENGL410/i)).toBeInTheDocument();
        expect(screen.getByText(/ACCT166/i)).toBeInTheDocument();
        expect(screen.getByText(/WOMS498/i)).toBeInTheDocument();
    });
    test("Filtered list render", () => {
        render(<FilteringSearch />);
        const textBox = screen.getByRole("textbox");
        userEvent.type(textBox, "CISC2");
        expect(screen.getByText(/CISC204/i)).toBeInTheDocument();
        expect(screen.getByText(/CISC210/i)).toBeInTheDocument();
        expect(screen.getByText(/CISC220/i)).toBeInTheDocument();
        expect(screen.getByText(/CISC250/i)).toBeInTheDocument();
        expect(screen.getByText(/CISC260/i)).toBeInTheDocument();
        expect(screen.getByText(/CISC266/i)).toBeInTheDocument();
        expect(screen.getByText(/CISC266/i)).toBeInTheDocument();
        expect(screen.getByText(/CISC267/i)).toBeInTheDocument();
        expect(screen.getByText(/CISC275/i)).toBeInTheDocument();
        expect(screen.getByText(/CISC287/i)).toBeInTheDocument();
        expect(screen.queryByText(/MATH242/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/STAT200/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/ENGL410/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/ACCT166/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/WOMS498/i)).not.toBeInTheDocument();
    });
    test("hide list", () => {
        render(<FilteringSearch />);
        const textBox = screen.getByRole("textbox");
        userEvent.click(textBox);
        userEvent.click(textBox);
        expect(screen.queryByText(/MATH242/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/CISC210/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/STAT200/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/ENGL410/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/ACCT166/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/WOMS498/i)).not.toBeInTheDocument();
    });
});
