import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the text 'Hello World' somewhere", () => {
    render(<App />);
    const texts = screen.getAllByText(/Hello World/);
    expect(texts.length).toBeGreaterThanOrEqual(1);
});
