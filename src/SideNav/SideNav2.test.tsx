import React from "react";
import { render, screen } from "@testing-library/react";
import { SideNav2 } from "./SideNav2";

describe("FilteringSearchTests", () => {
    test("render the search box", () => {
        render(
            <SideNav2
                flipView={function (): void {
                    throw new Error("Function not implemented.");
                }}
                flipPlan={function (): void {
                    throw new Error("Function not implemented.");
                }}
                flipModalView={function (): void {
                    throw new Error("Function not implemented.");
                }}
                flipAudit={function (): void {
                    throw new Error("Function not implemented.");
                }}
                flipAddView={function (): void {
                    throw new Error("Function not implemented.");
                }}
                handleLogout={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        expect(screen.getByText(/Add Degree Plan/i)).toBeInTheDocument();
        expect(screen.getByText(/Add Semester/i)).toBeInTheDocument();
        expect(screen.getByText(/Add Course/i)).toBeInTheDocument();
        expect(screen.getByText(/Degree Audit/i)).toBeInTheDocument();
    });
    /*test("clicking Add Degree Plan", async () => {
        render(
            <SideNav2
                flipView={function (): void {
                    throw new Error("Function not implemented.");
                }}
                flipModalView={function (): void {
                    throw new Error("Function not implemented.");
                }}
                flipAudit={function (): void {
                    throw new Error("Function not implemented.");
                }}
                flipAddView={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const ADGbutton = screen.getByRole("listitem", {
            name: "Add Degree Plan"
        });
        userEvent.click(ADGbutton);
        expect(screen.getByText("Semester Schedule")).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText("Semester Schedule")).toBeInTheDocument();
        });
    });
    */
});
