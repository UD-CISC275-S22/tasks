import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { DoubleHalf } from "./DoubleHalf";

describe("DoubleHalf Component tests", () => {
    beforeEach(() => {
        render(<DoubleHalf />);
    });
    test("(2 pts) The DoubleHalf value is initially 10", () => {
        expect(screen.getByText("10")).toBeInTheDocument();
        expect(screen.queryByText("20")).not.toBeInTheDocument();
        expect(screen.queryByText("5")).not.toBeInTheDocument();
    });
    test("(2 pts) There are Double and Halve buttons", () => {
        expect(
            screen.getByRole("button", { name: /Double/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Halve/i }),
        ).toBeInTheDocument();
    });
    test("(2 pts) You can double the number.", async () => {
        const double = screen.getByRole("button", { name: /Double/i });
        await act(async () => {
            double.click();
        });
        expect(screen.getByText("20")).toBeInTheDocument();
        expect(screen.queryByText("10")).not.toBeInTheDocument();
    });
    test("(2 pts) You can halve the number.", async () => {
        const halve = screen.getByRole("button", { name: /Halve/i });
        await act(async () => {
            halve.click();
        });
        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.queryByText("10")).not.toBeInTheDocument();
    });
    test("(2 pts) You can double AND halve the number.", async () => {
        const double = screen.getByRole("button", { name: /Double/i });
        const halve = screen.getByRole("button", { name: /Halve/i });
        await act(async () => {
            double.click();
        });
        expect(screen.getByText("20")).toBeInTheDocument();
        expect(screen.queryByText("10")).not.toBeInTheDocument();
        await act(async () => {
            double.click();
        });
        expect(screen.getByText("40")).toBeInTheDocument();
        expect(screen.queryByText("20")).not.toBeInTheDocument();
        await act(async () => {
            halve.click();
        });
        expect(screen.getByText("20")).toBeInTheDocument();
        expect(screen.queryByText("10")).not.toBeInTheDocument();
        await act(async () => {
            halve.click();
        });
        expect(screen.getByText("10")).toBeInTheDocument();
        expect(screen.queryByText("20")).not.toBeInTheDocument();
        await act(async () => {
            halve.click();
        });
        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.queryByText("10")).not.toBeInTheDocument();
        await act(async () => {
            halve.click();
        });
        expect(screen.getByText("2.5")).toBeInTheDocument();
        expect(screen.queryByText("5")).not.toBeInTheDocument();
    });
});
