import { AddDeletePlan } from "./AddDeletePlan";
import { Plan } from "../Interface/Plan";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { semester } from "../Interface/semester";

let plans: Plan[] = [];
const setplans = (plan: Plan[]) => {
    plans = plan;
};
let semesters: semester[] = [];
const setSemesters = (semester: semester[]) => {
    semesters = semester;
};
let modalView = true;
const setModalView = () => {
    modalView = !modalView;
};
let currentPlan = "";
const setCurrentPlan = (str: string) => {
    currentPlan = str;
};

console.log(semesters);

describe("Add/Delete Plan Component tests", () => {
    test("Check for Add Plan Button", () => {
        render(
            <AddDeletePlan
                handleClose={setModalView}
                show={true}
                allplans={plans}
                setPlans={setplans}
                currentPlan={currentPlan}
                setCurrentPlan={setCurrentPlan}
                setSemesters={setSemesters}
            />
        );
        expect(screen.getByText("Done")).toBeInTheDocument();
    });

    test("Add Plan Button", () => {
        render(
            <AddDeletePlan
                handleClose={setModalView}
                show={true}
                allplans={plans}
                setPlans={setplans}
                currentPlan={currentPlan}
                setCurrentPlan={setCurrentPlan}
                setSemesters={setSemesters}
            />
        );
        const input = screen.getByPlaceholderText(
            /Provide a name for the degree plan/i
        ) as HTMLInputElement;
        fireEvent.change(input, { target: { value: "Plan 1" } });
        expect(input.value).toBe("Plan 1");
        fireEvent.click(screen.getByRole("button", { name: /Done/ }));
        expect(plans.length).toEqual(1);
        expect(plans[0].name).toEqual("Plan 1");
    });

    test("Delete Plan testing", () => {
        render(
            <AddDeletePlan
                handleClose={setModalView}
                show={true}
                allplans={plans}
                setPlans={setplans}
                currentPlan={currentPlan}
                setCurrentPlan={setCurrentPlan}
                setSemesters={setSemesters}
            />
        );
        fireEvent.click(screen.getByRole("button", { name: /Delete Plan/ }));
        const dropdown = screen.getByTestId("dropdown") as HTMLInputElement;
        fireEvent.change(dropdown, { target: { value: "Plan 1" } });
        fireEvent.click(screen.getByRole("button", { name: /Done/ }));
        expect(plans.length).toEqual(0);
    });

    test("Closing Modal", () => {
        render(
            <AddDeletePlan
                handleClose={setModalView}
                show={true}
                allplans={plans}
                setPlans={setplans}
                currentPlan={currentPlan}
                setCurrentPlan={setCurrentPlan}
                setSemesters={setSemesters}
            />
        );
        const buttons = screen.getAllByRole("button", {
            name: /Close/
        });
        buttons.forEach((button) => {
            fireEvent.click(button);
            expect(screen.queryByLabelText("Done")).not.toBeInTheDocument();
            expect(
                screen.queryByLabelText("Creating Plan")
            ).not.toBeInTheDocument();
            expect(
                screen.queryByLabelText("Add/Delete")
            ).not.toBeInTheDocument();
        });
    });
});
