import React from "react";
import { render, screen } from "@testing-library/react";
import { FilteringSearch } from "./FilteringSearch";

test("renders the course name somewhere", () => {
    render(<FilteringSearch />);
    const linkElement = screen.getByText(/Welcome/i);
    expect(linkElement).toBeTruthy();
});
