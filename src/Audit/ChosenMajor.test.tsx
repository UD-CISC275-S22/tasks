import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ChosenMajor } from "./ChosenMajor";

// Mock the required functions passed as props
const mockHandleClose = jest.fn();
const mockMajorPageView = jest.fn();
const mockReqList = jest.fn();
const mockNewMajor = jest.fn();
const mockCreditList = jest.fn();

const defaultProps = {
    handleClose: mockHandleClose,
    show: true,
    majorPageView: mockMajorPageView,
    reqList: mockReqList,
    newMajor: mockNewMajor,
    creditList: mockCreditList
};

test("ChosenMajor renders correctly", () => {
    render(<ChosenMajor {...defaultProps} />);
    expect(screen.getByText("Choose Major")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
});

test("ChosenMajor updates selectedMajor state on change", () => {
    render(<ChosenMajor {...defaultProps} />);
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, {
        target: { value: "Data Science Concentration" }
    });
    expect(selectElement.title).toBe("Data Science Concentration");
});
