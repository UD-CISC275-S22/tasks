import React, { useState } from "react";
import { Question } from "../Interfaces/question";
import { Button, Stack } from "react-bootstrap";
//import { Quiz } from "../Interfaces/quiz";
import { QuestionView } from "./QuestionView";
import { AddQuestionModal } from "./AddQuestionModal";
import { FilterPublishedQuestions } from "./FilterPublishedQuestions";
import { MoreRecordControls } from "./MoreRecordControls";

export function QuestionList({
    questionss
}: {
    questionss: Question[];
}): JSX.Element {
    const [questions, setQuestions] = useState<Question[]>(questionss);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [filter, setFilter] = useState<boolean>(false);

    function clearAnswer() {
        //go through and set all the answers to nothing
        //set correct to false
        //set answered to false
        setQuestions(
            questions.map(
                (question): Question => ({
                    ...question,
                    correct: false,
                    answered: false,
                    inputAns: ""
                })
            )
        );
        //setPoints to 0
        //clear the answer boxes as well
    }

    function updateFilter() {
        setFilter(!filter);
    }

    function editQuestion(id: number, newQuestion: Question) {
        setQuestions(
            questions.map(
                (question: Question): Question =>
                    question.id === id ? newQuestion : question
            )
        );
    }

    function deleteQuestion(id: number) {
        setQuestions(
            questions.filter(
                (question: Question): boolean => question.id !== id
            )
        );
    }

    function addQuestion(newQuestion: Question) {
        const existing = questions.find(
            (question: Question): boolean => question.name === newQuestion.name
        );
        if (existing === undefined) {
            setQuestions([...questions, newQuestion]);
        }
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <div>
                <MoreRecordControls
                    clearAns={clearAnswer}
                    filter={filter}
                    filterQuestions={updateFilter}
                ></MoreRecordControls>
            </div>
            <div>
                {filter ? (
                    <FilterPublishedQuestions
                        questions={questions}
                        editQuestion={editQuestion}
                        deleteQuestion={deleteQuestion}
                    ></FilterPublishedQuestions>
                ) : (
                    <Stack gap={1}>
                        {questions.map((question: Question) => (
                            <div
                                key={question.id}
                                className="bg-light border m-2 p-2"
                            >
                                <QuestionView
                                    question={question}
                                    editQuestion={editQuestion}
                                    deleteQuestion={deleteQuestion}
                                ></QuestionView>
                            </div>
                        ))}
                    </Stack>
                )}
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add a new Question
                </Button>
                <AddQuestionModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addQuestion={addQuestion}
                ></AddQuestionModal>
            </div>
        </div>
    );
}
