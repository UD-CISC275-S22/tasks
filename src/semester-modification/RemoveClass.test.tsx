import React from "react";
import { render, screen } from "@testing-library/react";
import { semester } from "../Interface/semester";
import { classes } from "../Interface/classes";
import { RemoveClass } from "./RemoveClass";

const plan: semester[] = [
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
];

const remove1: classes = {
    code: "CISC181",
    title: "Introduction to Computer Science II",
    credits: 3,
    preReq: ["CISC108"]
};

const remove2: classes = {
    code: "CISC108",
    title: "Introduction to Computer Science I",
    credits: 3,
    preReq: []
};
let currentSemester = plan[0];
function setCurrentSemester(newSem: semester): void {
    currentSemester = { ...newSem };
}
describe("RemoveClass Component tests", () => {
    test("Button says Remove Class", () => {
        //Base needs to be reset else continues to remove objects throughout testing
        currentSemester = plan[0];
        render(
            //Redefine because each call has a different class to remove
            <RemoveClass
                schedule={currentSemester}
                classToDelete={remove1}
                onRemoveClass={function (updatedSchedule: semester): void {
                    setCurrentSemester(updatedSchedule);
                }}
            />
        );
        // We use `queryByText` because the text might not be there
        const valueText = screen.getByRole("button", { name: /Remove Class/i });
        expect(valueText).toBeInTheDocument();
    });

    test("Button removes second class from semester", () => {
        //Base needs to be reset else continues to remove objects throughout testing
        currentSemester = plan[0];
        render(
            //Redefine because each call has a different class to remove
            <RemoveClass
                schedule={currentSemester}
                classToDelete={remove1}
                onRemoveClass={function (updatedSchedule: semester): void {
                    setCurrentSemester(updatedSchedule);
                }}
            />
        );
        // Checks if the classlist doesn't contain the designated class (remove1)
        const valueText = screen.getByRole("button", {
            name: /Remove Class/i
        });
        valueText.click();
        expect(currentSemester.classList.length).toEqual(1);
    });

    test("Button removes first class from semester", () => {
        //Base needs to be reset else continues to remove objects throughout testing
        currentSemester = plan[0];
        render(
            //Redefine because each call has a different class to remove
            <RemoveClass
                schedule={currentSemester}
                classToDelete={remove2}
                onRemoveClass={function (updatedSchedule: semester): void {
                    setCurrentSemester(updatedSchedule);
                }}
            />
        );
        // Checks if the classlist doesn't contain the designated class (remove2)
        const valueText = screen.getByRole("button", {
            name: /Remove Class/i
        });
        valueText.click();
        expect(currentSemester.classList.length).toEqual(1);
    });
});
