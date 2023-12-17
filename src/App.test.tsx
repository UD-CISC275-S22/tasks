import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app title", () => {
    render(<App />);
    const linkElement = screen.getByText(/University of Delaware Scheduler/i);
    expect(linkElement).toBeTruthy();
});
