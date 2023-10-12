import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Question } from "../interfaces/questioncopy";
import { Quiz } from "../interfaces/quiz";
import { QuestionEdit } from "./QuestionEdit";

import "./QuizEdit.css";

export const QuizEdit = ({
    quiz,
    editQuiz,
    deleteQuiz,
    switchEdit,
    resetView
}: {
    quiz: Quiz;
    editQuiz: (id: number, updatedQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
    switchEdit: () => void;
    resetView: () => void;
}) => {
    const [newQuiz, setNewQuiz] = useState<Quiz>({ ...quiz });

    const editQuestion = (questionId: number, newQuestion: Question) => {
        setNewQuiz({
            ...newQuiz,
            questionList: newQuiz.questionList.map(
                (
                    question: Question
                ): Question => //fixed here
                    question.id === questionId ? { ...newQuestion } : question
            )
        });
    };

    const removeQuestion = (questionId: number) => {
        setNewQuiz({
            ...newQuiz,
            questionList: newQuiz.questionList.filter(
                (question: Question): boolean => question.id !== questionId //fixed
            )
        });
    };

    const saveChanges = () => {
        editQuiz(quiz.id, { ...newQuiz });
    };

    const swapQuestion = (idx1: number, idx2: number) => {
        setNewQuiz({
            ...newQuiz,
            questionList: newQuiz.questionList.map(
                (q: Question, idx: number): Question => {
                    if (idx === idx1) return newQuiz.questionList[idx2];
                    if (idx === idx2) return newQuiz.questionList[idx1];
                    return q; //problem
                }
            )
        });
    };

    return (
        <div>
            <div className="edit_header">
                <Form.Group controlId="formEditQuizId">
                    <div className="title_published_flex">
                        <div className="edit_title_area">
                            <Form.Label>Title: </Form.Label>
                            <Form.Control
                                value={newQuiz.title}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setNewQuiz({
                                        ...newQuiz,
                                        title: e.target.value
                                    })
                                }
                            ></Form.Control>
                        </div>
                        <Form.Check
                            className="published_check"
                            type="checkbox"
                            id="is-published_check"
                            label="Quiz Published"
                            data-testid="Quiz Published"
                            checked={newQuiz.published}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setNewQuiz({
                                    ...newQuiz,
                                    published: e.target.checked //fixed
                                });
                            }}
                        ></Form.Check>
                    </div>
                    <Form.Label>Description: </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={newQuiz.body}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setNewQuiz({ ...newQuiz, body: e.target.value })
                        }
                    ></Form.Control>
                </Form.Group>
            </div>

            <div>
                {newQuiz.questionList.map((q: Question, index: number) => (
                    <QuestionEdit
                        key={newQuiz.id + "|" + q.id}
                        index={index}
                        lastIndex={newQuiz.questionList.length - 1}
                        question={q}
                        editQuestion={editQuestion}
                        removeQuestion={removeQuestion}
                        swapQuestion={swapQuestion}
                    ></QuestionEdit>
                ))}
            </div>
            <hr />
            <div>
                <Button
                    className="add_question_button"
                    onClick={() => {
                        setNewQuiz({
                            ...newQuiz,
                            questionList: [
                                ...newQuiz.questionList,
                                {
                                    id: newQuiz.questionList.length,
                                    body: "Example Question",
                                    type: "short_answer_question",
                                    options: [],
                                    submission: "",
                                    expected: "Example Answer",
                                    points: 1,
                                    published: false
                                }
                            ]
                        });
                    }}
                >
                    Add Question
                </Button>
                <div className="edit_footer">
                    <div>
                        <Button
                            variant="success"
                            className="save_edit_btn"
                            onClick={() => {
                                saveChanges();
                                switchEdit();
                            }}
                        >
                            Save
                        </Button>
                        <Button variant="warning" onClick={switchEdit}>
                            Cancel
                        </Button>
                    </div>
                    <Button
                        variant="danger"
                        onClick={() => {
                            deleteQuiz(quiz.id);
                            resetView();
                        }}
                    >
                        Delete Quiz
                    </Button>
                </div>
            </div>
        </div>
    );
};
