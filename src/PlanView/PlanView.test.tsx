import { Plan } from "../Interface/Plan";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { semester } from "../Interface/semester";
import { PlanView } from "./PlanView";

const plans: Plan[] = [
    {
        name: "plan 1",
        semesters: [
            {
                id: 1,
                fullTime: true,
                classList: [
                    {
                        code: "CISC108",
                        title: "Introduction to Computer Science I",
                        credits: 3,
                        preReq: []
                    },
                    {
                        code: "CISC181",
                        title: "Introduction to Computer Science II",
                        credits: 3,
                        preReq: ["CISC108"]
                    }
                ],
                totalCredits: 6,
                season: "Fall 2023"
            },
            {
                id: 2,
                fullTime: true,
                classList: [
                    {
                        code: "CISC210",
                        title: "Introduction to Systems Programming",
                        credits: 3,
                        preReq: ["CISC108"]
                    },
                    {
                        code: "CISC220",
                        title: "Data Structures",
                        credits: 3,
                        preReq: ["CISC210"]
                    }
                ],
                totalCredits: 6,
                season: "Spring 2023"
            },
            {
                id: 3,
                fullTime: true,
                classList: [
                    {
                        code: "CISC108",
                        title: "Introduction to Computer Science I",
                        credits: 3,
                        preReq: []
                    },
                    {
                        code: "CISC181",
                        title: "Introduction to Computer Science II",
                        credits: 3,
                        preReq: ["CISC108"]
                    }
                ],
                totalCredits: 6,
                season: "Winter 2023"
            }
        ]
    }
];

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

describe("Plan View Component tests", () => {
    beforeEach(() => {
        render(
            <PlanView
                handleClose={setModalView}
                show={modalView}
                allplans={plans}
                changeViewSemesters={setSemesters}
                setCurrentPlan={setCurrentPlan}
            />
        );
    });

    test("Basic layout", () => {
        expect(screen.getByText("Done")).toBeInTheDocument();
    });

    test("Basic layout 2", () => {
        expect(screen.getByText("Choose Plan")).toBeInTheDocument();
    });

    test("Basic layout 3", () => {
        expect(screen.getByText("Close")).toBeInTheDocument();
    });

    test("Changing current plan being viewed", () => {
        const dropdown = screen.getByTestId("dropdown") as HTMLInputElement;
        fireEvent.change(dropdown, { target: { value: "plan 1" } });
        fireEvent.click(screen.getByRole("button", { name: /Done/ }));
        expect(semesters).toStrictEqual([
            {
                id: 1,
                fullTime: true,
                classList: [
                    {
                        code: "CISC108",
                        title: "Introduction to Computer Science I",
                        credits: 3,
                        preReq: []
                    },
                    {
                        code: "CISC181",
                        title: "Introduction to Computer Science II",
                        credits: 3,
                        preReq: ["CISC108"]
                    }
                ],
                totalCredits: 6,
                season: "Fall 2023"
            },
            {
                id: 2,
                fullTime: true,
                classList: [
                    {
                        code: "CISC210",
                        title: "Introduction to Systems Programming",
                        credits: 3,
                        preReq: ["CISC108"]
                    },
                    {
                        code: "CISC220",
                        title: "Data Structures",
                        credits: 3,
                        preReq: ["CISC210"]
                    }
                ],
                totalCredits: 6,
                season: "Spring 2023"
            },
            {
                id: 3,
                fullTime: true,
                classList: [
                    {
                        code: "CISC108",
                        title: "Introduction to Computer Science I",
                        credits: 3,
                        preReq: []
                    },
                    {
                        code: "CISC181",
                        title: "Introduction to Computer Science II",
                        credits: 3,
                        preReq: ["CISC108"]
                    }
                ],
                totalCredits: 6,
                season: "Winter 2023"
            }
        ]);
        expect(currentPlan).toBe("plan 1");
    });

    test("Clicking Close", () => {
        render(
            <PlanView
                handleClose={setModalView}
                show={!modalView}
                allplans={plans}
                changeViewSemesters={setSemesters}
                setCurrentPlan={setCurrentPlan}
            />
        );
        const buttons = screen.getAllByRole("button", { name: /Close/ });
        buttons.forEach((button) => {
            fireEvent.click(button);
            expect(screen.queryByLabelText("Done")).not.toBeInTheDocument();
            expect(
                screen.queryByLabelText("Choose Plan")
            ).not.toBeInTheDocument();
        });
    });
});
