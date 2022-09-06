import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the text 'Victor' somewhere", () => {
    render(<App />);
    const texts = screen.getAllByText("Victor Ezekiel Umoren-Udo");
    expect(texts.length).toBeGreaterThanOrEqual(1);
});
