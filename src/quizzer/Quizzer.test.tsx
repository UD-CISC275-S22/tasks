export {}
/*import React from "react";
import { render, screen } from "@testing-library/react";
import { Quiz } from "../interfaces/quiz";
import { Question, QuestionType } from "../interfaces/question";
import { Quizzer } from "./Quizzer";
import userEvent from "@testing-library/user-event";
import sample from "../data/quizzes.json";

const QUIZZES = sample.map(
    (quiz): Quiz => ({
        ...quiz,
        questionList: quiz.questionList.map(
            (q): Question => ({
                ...q,
                submission: "",
                type: q.type as QuestionType
            })
        )
    })
);

describe("Quizzer Tests", () => {
    beforeEach(() => {
        //render(<Quizzer />);
    });
    test("Users can add a new quiz", () => {
        const button = screen.getByText("Add New Quiz");
        expect(screen.queryByLabelText("Title: ")).not.toBeInTheDocument();
        button.click();
        expect(screen.getByLabelText("Title:")).toBeInTheDocument();
        const saveButton = screen.getByText("Save Changes");
        saveButton.click();
        expect(screen.getByText("Example Quiz")).toBeInTheDocument();
    });

    test("Users can see a list of quizzes, including the quizzes title, description, and how many questions it has", () => {
        for (let i = 0; i < QUIZZES.length; i++) {
            expect(screen.getByText(QUIZZES[i].title)).toBeInTheDocument();
            expect(
                screen.getByText(
                    QUIZZES[i].questionList.length + " question",
                    { exact: false }
                )
            ).toBeInTheDocument();
            expect(
                screen.getByText(QUIZZES[i].body, { exact: false })
            ).toBeInTheDocument();
        }
    });

    test("Users can select a specific quiz to see the questions, including the questions name, body, and points", () => {
        const text = screen.getByText("Simple_Questions");
        text.click();
        expect(screen.getByText("Exit")).toBeInTheDocument();
        expect(
            screen.getByText("What is 2+2?", { exact: false })
        ).toBeInTheDocument();
        for (let i = 0; i < QUIZZES[1].questionList.length; i++) {
            if (QUIZZES[1].questionList[i].published === true) {
                expect(
                    screen.queryByText(QUIZZES[1].questionList[i].body, {
                        exact: false
                    })
                ).toBeInTheDocument();
                expect(
                    screen.queryAllByText(
                        QUIZZES[1].questionList[i].points + " pt",
                        { exact: false }
                    )[0]
                ).toBeInTheDocument();
            }
        }
    });

    test("Users can enter or choose an answer for a quiz question, and be told if they are correct", () => {
        const text = screen.getByText("Simple_Questions");
        text.click();
        expect(screen.getByText("Exit")).toBeInTheDocument();
        expect(
            screen.getByText("What is 2+2?", { exact: false })
        ).toBeInTheDocument();
        const selectOption = screen.getAllByTestId("select-option")[0];
        expect(screen.queryByText("✔️")).not.toBeInTheDocument();
        userEvent.type(selectOption, "4");
        const submitButton = screen.getAllByText("Submit")[0];
        submitButton.click();
        expect(screen.getByText("✔️")).toBeInTheDocument();
    });

    test("Users can see how many total points they have earned", () => {
        const text = screen.getByText("Simple_Questions");
        text.click();
        expect(screen.getByText(/\d\/\d/)).toBeInTheDocument();
    });

    test("Users can clear out their existing answers for a quiz", () => {
        const text = screen.getByText("Simple_Questions");
        text.click();
        expect(screen.getByText("Exit")).toBeInTheDocument();
        expect(
            screen.getByText("What is 2+2?", { exact: false })
        ).toBeInTheDocument();
        const selectOption = screen.getAllByTestId("select-option")[0];
        expect(screen.queryByText("✔️")).not.toBeInTheDocument();

        userEvent.type(selectOption, "4");
        expect(selectOption).toHaveValue("4");
        const submitButton = screen.getAllByText("Submit")[0];
        submitButton.click();
        expect(screen.getByText("✔️")).toBeInTheDocument();

        const resetButton = screen.getByText("Reset"); // Click Reset button, the forum should have no value now and ✔️ should not be in the document.
        resetButton.click();
        expect(screen.queryByText("✔️")).not.toBeInTheDocument();
        expect(selectOption).toHaveValue("");
    });

    test("Users can publish or unpublish a question", () => {
        const text = screen.getByText("Simple_Questions");
        text.click();
        const editButton = screen.getByText("Edit");
        editButton.click();

        const publishedCheck = screen.getAllByTestId(
            "question_published_check"
        )[3];
        publishedCheck.click();
        expect(publishedCheck).toBeChecked();

        const saveButton = screen.getByText("Save");
        saveButton.click();

        expect(
            screen.getByText(QUIZZES[1].questionList[3].body, {
                exact: false
            })
        ).toBeInTheDocument();
    });

    test("Users can filter the questions in a list so that only published questions are shown", () => {
        const text = screen.getByText("Simple_Questions");
        text.click();
        const editButton = screen.getByText("Edit");
        editButton.click();

        const quizPublished = screen.getByTestId("Quiz Published");
        quizPublished.click();
        expect(quizPublished).not.toBeChecked();

        const saveButton = screen.getByText("Save");
        saveButton.click();

        expect(
            screen.getByText(QUIZZES[1].questionList[1].body, {
                exact: false
            })
        ).toBeInTheDocument();
    });

    test("Users can delete an existing quiz", () => {
        const text = screen.getByText("Simple_Questions");
        text.click();
        const editButton = screen.getByText("Edit");
        editButton.click();

        const deleteButton = screen.getByText("Delete Quiz");
        deleteButton.click();

        expect(screen.queryByText("Simple_Questions")).not.toBeInTheDocument();
    });

    test("Users can delete an existing quiz question", () => {
    });

    test("Users can add a new quiz question", () => {
        const text = screen.getByText("Simple_Questions");
        text.click();

        expect(
            screen.queryByText("Example Question", { exact: false })
        ).not.toBeInTheDocument();

        const editButton = screen.getByText("Edit");
        editButton.click();

        const addButton = screen.getByText("Add Question");
        addButton.click();

        const quizPublished = screen.getByTestId("Quiz Published");
        quizPublished.click();
        expect(quizPublished).not.toBeChecked();

        const saveButton = screen.getByText("Save");
        saveButton.click();

        expect(
            screen.getByText("Example Question", { exact: false })
        ).toBeInTheDocument();
    });

    test("Users can edit the questions and fields of a quiz", () => {
    });

    test("Users can reorder quiz questions", () => {
        const text = screen.getByText("Simple_Questions");
        text.click();

        const intialOrder = screen.getAllByTestId("question_body");
        expect(intialOrder[0]).toHaveTextContent("What is 2+2?");
        expect(intialOrder[1]).toHaveTextContent("Which of these is a color?");

        const editButton = screen.getByText("Edit");
        editButton.click();

        const orderArrow = screen.getAllByText("▲")[1];
        orderArrow.click();
        const orderArrow2 = screen.getAllByText("▲")[2];
        orderArrow2.click();

        const saveButton = screen.getByText("Save");
        saveButton.click();

        const afterOrder = screen.getAllByTestId("question_body");
        expect(afterOrder[0]).toHaveTextContent("Which of these is a color?");
        expect(afterOrder[1]).toHaveTextContent("What is 2+2?");
    });

    test("Quiz questions can be of AT LEAST two types: a short answer question or multiple choice question ", () => {
        const text = screen.getByText("Simple_Questions");
        text.click();

        const editButton = screen.getByText("Edit");
        editButton.click();

        const dropdown = screen.getAllByLabelText("Type:")[0];
        userEvent.selectOptions(dropdown, "multiple_choice_question");
        const options: HTMLOptionElement[] = screen.getAllByTestId(
            "question_type_dropdown_0"
        );
        expect(options[0].selected).toBeTruthy();
        expect(options[1].selected).toBeFalsy();

        const saveButton = screen.getByText("Save");
        saveButton.click();

        expect(
            screen.getAllByText("Example Answer", {
                exact: false
            })[0]
        ).toBeInTheDocument();
    });
});
*/