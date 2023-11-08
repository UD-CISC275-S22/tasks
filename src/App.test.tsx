import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the program title", () => {
    render(<App />);
    const linkElement = screen.getByText(/CIS Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Import CSV button", () => {
    render(<App />);
    const linkElement = screen.getByText(/Import CSV/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders export CSV button", () => {
    render(<App />);
    const linkElement = screen.getByText(/Create New Plan/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders add course", () => {
    render(<App />);
    const linkElement = screen.getByText(/Add Course/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders names", () => {
    render(<App />);
    const linkElement = screen.getByText(
        /Adam Beck, Zach Reggio, Sam Ferguson, Brandon Marafino, Adam Liu/i
    );
    expect(linkElement).toBeInTheDocument();
});

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

test("Users can delete courses", () => {
    render(<App />);
    const button = screen.getByText(/CISC108/i);
    button.click();
    expect(screen.queryByLabelText("Name:")).toBeInTheDocument();
    expect(screen.queryByLabelText("Ticker:")).toBeInTheDocument();
    expect(screen.queryByLabelText("Credits:")).toBeInTheDocument();
    const DeleteButton = screen.getByText(/Delete Course/i);
    DeleteButton.click();
    expect(button).not.toBeInTheDocument();
});

test("Users can add courses", () => {
    render(<App />);
    const button = screen.getByText(/Add Course/i);
    button.click();
    expect(screen.queryByLabelText("Course Name:")).toBeInTheDocument();
    expect(screen.queryByLabelText("Course Ticker:")).toBeInTheDocument();
    expect(screen.queryByLabelText("Credits:")).toBeInTheDocument();
    expect(screen.queryByLabelText("Prerequisites:")).toBeInTheDocument();
    expect(screen.queryByLabelText("Semester:")).toBeInTheDocument();
    const selectButton = screen.getByText(/Select Semester/i);
    selectButton.click();
    const secondSem = screen.getByText(/Second Semester/i);
    secondSem.click();
    //need to change the button title for test to work or need to fix test later
    const button2 = screen.getByText(/Add The Course/i);
    button2.click();
    expect(screen.getByText(/0/i)).toBeInTheDocument();
});
