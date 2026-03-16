import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { ChooseTeam } from "./ChooseTeam";

describe("ChooseTeam Component tests", () => {
    beforeEach(() => {
        render(<ChooseTeam />);
    });
    test("(2 pts) The initial team is empty", () => {
        const currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(0);
    });
    test("(2 pts) There are 7 buttons.", () => {
        const adders = screen.queryAllByRole("button");
        expect(adders).toHaveLength(7);
    });
    test("(2 pts) Clicking first team member works", async () => {
        const first = screen.queryAllByRole("button")[0];
        await act(async () => {
            first.click();
        });
        const currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(1);
        expect(currentTeam[0].textContent).toEqual(first.textContent);
    });
    test("(2 pts) Clicking the third team member works", async () => {
        const third = screen.queryAllByRole("button")[2];
        await act(async () => {
            third.click();
        });
        const currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(1);
        expect(currentTeam[0].textContent).toEqual(third.textContent);
    });
    test("(2 pts) Clicking three team members works", async () => {
        const [, second, third, , fifth] = screen.queryAllByRole("button");
        await act(async () => {
            third.click();
        });
        await act(async () => {
            second.click();
        });
        await act(async () => {
            fifth.click();
        });
        const currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(3);
        expect(currentTeam[0].textContent).toEqual(third.textContent);
        expect(currentTeam[1].textContent).toEqual(second.textContent);
        expect(currentTeam[2].textContent).toEqual(fifth.textContent);
    });
    test("(2 pts) Clearing the team works", async () => {
        const [, second, third, fourth, fifth, , clear] =
            screen.queryAllByRole("button");
        await act(async () => {
            third.click();
        });
        await act(async () => {
            second.click();
        });
        await act(async () => {
            fifth.click();
        });
        let currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(3);
        expect(currentTeam[0].textContent).toEqual(third.textContent);
        expect(currentTeam[1].textContent).toEqual(second.textContent);
        expect(currentTeam[2].textContent).toEqual(fifth.textContent);
        await act(async () => {
            clear.click();
        });
        currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(0);
        await act(async () => {
            fourth.click();
        });
        currentTeam = screen.queryAllByRole("listitem");
        expect(currentTeam).toHaveLength(1);
        expect(currentTeam[0].textContent).toEqual(fourth.textContent);
    });
});
