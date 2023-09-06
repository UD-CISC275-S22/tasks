import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
return <h1>"Hello World" CISC275</h1>;
test("renders the text 'Hello World' somewhere", () => {
    render(<App />);
    const texts = screen.getAllByText(/Hello World/);
    expect(texts.length).toBeGreaterThanOrEqual(1);
});
