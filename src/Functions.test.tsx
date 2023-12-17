import React from "react";
import { usePlannerFunctions } from "./PlannerFunctions";
import { renderHook, act } from "@testing-library/react-hooks";

describe("usePlannerFunctions", () => {
    const initialPlans = {
        id: "1",
        title: "Test Plan",
        semesters: [
            {
                id: "Fall 2022",
                season: "Fall",
                year: "2022",
                skip: false,
                courses: [
                    {
                        code: "CISC 108",
                        name: "Introduction to Computer Science I",
                        descr: "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics.",
                        credits: " 3",
                        preReq: "",
                        restrict: "",
                        breadth:
                            "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
                        typ: "Fall and Spring"
                    }
                ]
            }
        ]
    };

    it("should initialize with the correct initial state", () => {
        const { result } = renderHook(() => usePlannerFunctions(initialPlans));

        // Modify the assertions based on your specific initial state structure
        expect(result.current.semestersData).toEqual(initialPlans.semesters);
        expect(result.current.searchTerm).toBe("");
        // Add more assertions for other initial states
    });

    it("should handle search term change", () => {
        const { result } = renderHook(() => usePlannerFunctions(initialPlans));

        act(() => {
            result.current.handleSearchTermChange({
                target: { value: "test" }
            } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.searchTerm).toBe("test");
        expect(result.current.showCourseList).toBe(true);
    });
});
