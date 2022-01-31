import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the text 'Hello World' somewhere", () => {
    render(<App />);
    const text = screen.getByText(/Hello World/);
    expect(text).toBeInTheDocument();
});
