import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddSemesterModal } from "./addSemesterModal";
import { semester } from "../Interface/semester";

let semesters: semester[] = [
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
    }
];

const setSemesters = (semester: semester[]) => {
    semesters = semester;
};
let modalView = true;
const setModalView = () => {
    modalView = !modalView;
};
const currentPlan = "Plan 1";

describe("FilteringSearchTests", () => {
    beforeEach(() => {
        render(
            <AddSemesterModal
                handleClose={setModalView}
                show={modalView}
                semesters={semesters}
                settingSemester={setSemesters}
                currentPlan={currentPlan}
            />
        );
    });

    test("Buttons Present", () => {
        expect(screen.getByText("Done")).toBeInTheDocument();
        expect(screen.getByText("Close")).toBeInTheDocument();
        expect(screen.getByText("Semester Name:")).toBeInTheDocument();
        expect(screen.getByText("Course:")).toBeInTheDocument();
    });

    test("Checking if Semester is added", () => {
        const input = screen.getByPlaceholderText(
            /Provide a name for the semester/i
        ) as HTMLInputElement;
        fireEvent.change(input, { target: { value: "Fall 2025" } });
        const input2 = screen.getByPlaceholderText(
            /Search by Course Code/i
        ) as HTMLInputElement;
        fireEvent.change(input2, { target: { value: "BISC401" } });
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
                        code: "BISC401",
                        title: "Molecular Biology of the Cell",
                        credits: 3,
                        description:
                            "Introduction to the molecular biology of eucaryotes and procaryotes. Topics include structure and function of proteins and nucleic acids; replication and repair of DNA; biosynthesis of RNA and proteins; membranes, transport, composition and function of the eucaryotic cell, chromosomes, viruses, the immune system and recombinant DNA.",
                        originalCode: "BISC401",
                        originalCredits: 3,
                        originalTitle: "Molecular Biology of the Cell",
                        preReq: ["BISC 207"]
                    }
                ],
                totalCredits: 3,
                season: "Fall 2025"
            }
        ]);
    });

    test("Clicking Close", () => {
        render(
            <AddSemesterModal
                handleClose={setModalView}
                show={!modalView}
                semesters={semesters}
                settingSemester={setSemesters}
                currentPlan={currentPlan}
            />
        );
        const buttons = screen.getAllByRole("button", { name: /Close/ });
        buttons.forEach((button) => {
            fireEvent.click(button);
            expect(screen.queryByLabelText("Done")).not.toBeInTheDocument();
            expect(screen.queryByLabelText("Semester")).not.toBeInTheDocument();
            expect(
                screen.queryByLabelText("Semester Name:")
            ).not.toBeInTheDocument();
            expect(screen.queryByLabelText("Course:")).not.toBeInTheDocument();
        });
    });
});
