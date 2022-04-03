import React, { useState } from "react";
import { Question } from "../Interfaces/question";
import { Button, Stack } from "react-bootstrap";
//import { Quiz } from "../Interfaces/quiz";
import { QuestionView } from "./QuestionView";
import { AddQuestionModal } from "./AddQuestionModal";

export function QuestionList({
    //send a single quiz in
    //quiz,
    questionss,
    points
}: {
    //quiz: Quiz;
    questionss: Question[];
    points: number;
}): JSX.Element {
    const [questions, setQuestions] = useState<Question[]>(questionss);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);

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
            (question: Question): boolean => question.id === newQuestion.id
        );
        if (existing === undefined) {
            setQuestions([...questions, newQuestion]);
        }
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <Stack gap={1}>
                {questions.map((question: Question) => (
                    <div key={question.id} className="bg-light border m-2 p-2">
                        <QuestionView
                            question={question}
                            editQuestion={editQuestion}
                            deleteQuestion={deleteQuestion}
                            points={points}
                        ></QuestionView>
                    </div>
                ))}
            </Stack>
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
