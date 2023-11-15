import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

/*
test("renders the course name somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/CISC275/i);
    expect(linkElement).toBeInTheDocument();
});
*/

//^^above example is from the task fork but for our app we will test to make sure dropdown menus work, that editing courses work and clearing semesters function correctly
//TAs said that we wouldn't need to worry about unit tests until later on in the project when we have more functionalities on the actual site and more courses in a JSON file
//so we do not have many tests but we have some examples in these test files (like the one below) of how we plan to implement them

test("renders the fall semester type", () => {
    render(<App />);
    const FallSem = screen.getByText(/Fall/i);
    expect(FallSem).toBeInTheDocument();
});
