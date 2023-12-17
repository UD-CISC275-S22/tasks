import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders the program title", () => {
    render(<App />);
    const linkElement = screen.getByText(/CIS Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders need help button", () => {
    render(<App />);
    const linkElement = screen.getByText(/Need Help/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders names", () => {
    render(<App />);
    const linkElement = screen.getByText(
        /Adam Beck, Zach Reggio, Sam Ferguson, Brandon Marafino, Adam Liu/i
    );
    expect(linkElement).toBeInTheDocument();
});

test("renders export to csv", () => {
    render(<App />);
    const linkElement = screen.getByText(/Export to CSV/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders new course plans", () => {
    render(<App />);
    const linkElement = screen.getByText(/New Course Plans/i);
    expect(linkElement).toBeInTheDocument();
});

test("Switch to/from course plan button", () => {
    render(<App />);
    const button = screen.getByText(/New Course Plans/i);
    button.click();
    const SwitchButton = screen.getByText(/View Course Plans/i);
    SwitchButton.click();
    const linkElement = screen.getByText(/New Course Plans/i);
    expect(linkElement).toBeInTheDocument();
});

test("Testing add course to queue 1", () => {
    render(<App />);
    const button = screen.getByText(/New Course Plans/i);
    button.click();
    const buttons = screen.getAllByText("ADD");
    const specificButton = buttons[0];
    specificButton.click();
    const textElements = screen.getAllByText("ACCT 166");
    expect(textElements.length).toBe(2);
});

test("Testing add course to queue 2", () => {
    render(<App />);
    const button = screen.getByText(/New Course Plans/i);
    button.click();
    const buttons = screen.getAllByText("ADD");
    const specificButton = buttons[4];
    specificButton.click();
    const textElements = screen.getAllByText("ACCT 266");
    expect(textElements.length).toBe(2);
});

test("Testing search bar", () => {
    render(<App />);
    const button = screen.getByText(/New Course Plans/i);
    button.click();
    const textBox = screen.getByPlaceholderText("Search");
    userEvent.type(textBox, "CISC 106");
    const buttons = screen.getAllByText("ADD");
    const specificButton = buttons[0];
    specificButton.click();
    const textElements = screen.getAllByText("CISC 106");
    expect(textElements.length).toBe(2);
});

test("Testing semester remove button (fall)", () => {
    render(<App />);
    const button = screen.getByText(/New Course Plans/i);
    button.click();
    const buttons = screen.getAllByText("remove");
    const specificButton = buttons[0];
    specificButton.click();
    const textElements = screen.getAllByText("Fall");
    expect(textElements.length).toBe(3);
});

test("Testing semester remove button (winter)", () => {
    render(<App />);
    const button = screen.getByText(/New Course Plans/i);
    button.click();
    const buttons = screen.getAllByText("remove");
    const specificButton = buttons[1];
    specificButton.click();
    const textElements = screen.getAllByText("winter");
    expect(textElements.length).toBe(3);
});

test("Testing degree plan drop down", () => {
    render(<App />);
    const button2 = screen.getByText(/New Course Plans/i);
    button2.click();
    const button = screen.getByText(/View Course Plans/i);
    button.click();
    const buttons = screen.getAllByText("Bachelor of Computer Science");
    const specificButton = buttons[0];
    specificButton.click();
    const textElements = screen.getAllByText("Fall");
    expect(textElements.length).toBe(2);
});

test("Testing save degree plan and delete degree plan", () => {
    render(<App />);
    const button2 = screen.getByText(/New Course Plans/i);
    button2.click();
    const buttons = screen.getAllByText("ADD");
    const specificButton = buttons[0];
    specificButton.click();
    const buttons2 = screen.getAllByText("AddQueue");
    const specificButton2 = buttons2[0];
    specificButton2.click();
    const buttons3 = screen.getAllByText("Save");
    const specificButton3 = buttons3[0];
    specificButton3.click();
    const button = screen.getByText(/View Course Plans/i);
    button.click();
    const textElements = screen.getAllByText("Delete");
    expect(textElements.length).toBe(2);
    const buttons4 = screen.getAllByText("Delete");
    const specificButton4 = buttons4[0];
    specificButton4.click();
    const textElements2 = screen.getAllByText("Delete");
    expect(textElements2.length).toBe(1);
});

test("Testing requirements feature", () => {
    render(<App />);
    const button = screen.getByText(/New Course Plans/i);
    button.click();
    const textBox = screen.getByPlaceholderText("Search");
    userEvent.type(textBox, "CISC 108");
    const buttons = screen.getAllByText("ADD");
    const specificButton = buttons[0];
    specificButton.click();
    const buttons2 = screen.getAllByText("AddQueue");
    const specificButton2 = buttons2[0];
    specificButton2.click();
    const textElements2 = screen.getAllByText("Yes");
    expect(textElements2.length).toBe(1);
});

test("Testing clear semester", () => {
    render(<App />);
    const button = screen.getByText(/New Course Plans/i);
    button.click();
    const buttons = screen.getAllByText("ADD");
    const specificButton = buttons[0];
    specificButton.click();
    const buttons2 = screen.getAllByText("AddQueue");
    const specificButton2 = buttons2[0];
    specificButton2.click();
    const buttons3 = screen.getAllByText("Clear semester");
    const specificButton3 = buttons3[0];
    specificButton3.click();
    const textElements2 = screen.getAllByText("ACCT 166");
    expect(textElements2.length).toBe(1);
});

test("Testing remove from queue", () => {
    render(<App />);
    const button = screen.getByText(/New Course Plans/i);
    button.click();
    const buttons = screen.getAllByText("ADD");
    const specificButton = buttons[0];
    specificButton.click();
    specificButton.click();
    specificButton.click();
    const textElements = screen.getAllByText("ACCT 166");
    expect(textElements.length).toBe(4); //3 in queue, 1 in catalog
    const buttons2 = screen.getAllByText("Remove");
    const specificButton2 = buttons2[0];
    specificButton2.click();
    const textElements2 = screen.getAllByText("ACCT 166");
    expect(textElements2.length).toBe(3);
    const buttons3 = screen.getAllByText("Remove");
    const specificButton3 = buttons3[0];
    specificButton3.click();
    const textElements3 = screen.getAllByText("ACCT 166");
    expect(textElements3.length).toBe(2);
});

test("Testing clear all semesters button", () => {
    render(<App />);
    const button = screen.getByText(/New Course Plans/i);
    button.click();
    const buttons = screen.getAllByText("ADD");
    const specificButton = buttons[0];
    specificButton.click();
    const buttons2 = screen.getAllByText("AddQueue");
    const specificButton2 = buttons2[0];
    specificButton2.click();
    const specificButton3 = buttons[1];
    specificButton3.click();
    const specificButton4 = buttons2[1];
    specificButton4.click();
    const textElements = screen.getAllByText("ACCT 166");
    expect(textElements.length).toBe(2);
    const textElements2 = screen.getAllByText("ACCT 200");
    expect(textElements2.length).toBe(2);
    const buttons3 = screen.getAllByText("Clear all Semester");
    const specificButton5 = buttons3[0];
    specificButton5.click();
    const textElements3 = screen.getAllByText("ACCT 166");
    expect(textElements3.length).toBe(1);
    const textElements4 = screen.getAllByText("ACCT 200");
    expect(textElements4.length).toBe(1);
});

test("Testing edit degree plan", () => {
    render(<App />);
    const buttons = screen.getAllByText("Edit");
    const specificButton = buttons[0];
    specificButton.click();
    const buttons2 = screen.getAllByText("remove");
    const specificButton2 = buttons2[0];
    specificButton2.click();
    const textElements4 = screen.getAllByText("Fall");
    expect(textElements4.length).toBe(1);
});

test("Testing save degree plan", () => {
    render(<App />);
    const buttons = screen.getAllByText("Edit");
    const specificButton = buttons[0];
    specificButton.click();
    const buttons2 = screen.getAllByText("Save");
    const specificButton2 = buttons2[0];
    specificButton2.click();
    const button3 = screen.getByText(/View Course Plans/i);
    button3.click();
    const textElements4 = screen.getAllByText("Edit");
    expect(textElements4.length).toBe(2);
});

test("Testing save plan as a given name", () => {
    render(<App />);
    const button = screen.getByText(/New Course Plans/i);
    button.click();
    const textBox = screen.getByPlaceholderText("Untittled");
    userEvent.type(textBox, "Plan 1");
    const buttons = screen.getAllByText("Save");
    const specificButton = buttons[0];
    specificButton.click();
    const button3 = screen.getByText(/View Course Plans/i);
    button3.click();
    const textElements4 = screen.getAllByText("Plan 1");
    expect(textElements4.length).toBe(1);
});
/*
test("Add Course Button works", () => {
    render(<App />);
    const button = screen.getByText(/Add Course/i);
    button.click();
    expect(screen.queryByLabelText("Course Name:")).toBeInTheDocument();
    expect(screen.queryByLabelText("Course Ticker:")).toBeInTheDocument();
    expect(screen.queryByLabelText("Credits:")).toBeInTheDocument();
    expect(screen.queryByLabelText("Prerequisites:")).toBeInTheDocument();
    expect(screen.queryByLabelText("Semester:")).toBeInTheDocument();
    const CloseButton = screen.getByText(/Close/i);
    CloseButton.click();
    const linkElement = screen.getByText(
        /Adam Beck, Zach Reggio, Sam Ferguson, Brandon Marafino, Adam Liu/i
    );
    expect(linkElement).toBeInTheDocument();
});
*/
