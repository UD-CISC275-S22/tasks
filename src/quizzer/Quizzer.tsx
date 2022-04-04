import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AddQuizModal } from "./Components/AddQuizModal";
import { QuestionList } from "./Components/QuestionList";
import { QuizList } from "./Components/QuizList";
import quizzes from "./Data/quizzes.json";
import { Quiz } from "./Interfaces/quiz";

const QUIZZES = quizzes.map((quiz): Quiz => ({ ...quiz }));

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [selectedQuiz, setSelectedQuiz] = useState<Quiz>(quizzes[0]);
    const [selectedTitle, setSelectedTitle] = useState<string>("");

    function updateSelectedTitle(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedTitle(event.target.value);
        const ind = quizzes.map((Quiz) => Quiz.title).indexOf(selectedTitle);
        setSelectedQuiz(quizzes[ind]);
    }

    function editQuiz(id: number, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
    }

    function deleteQuiz(id: number) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
    }

    function addQuiz(newQuiz: Quiz) {
        const existing = quizzes.find(
            (quiz: Quiz): boolean => quiz.title === newQuiz.title
        );
        if (existing === undefined) {
            setQuizzes([...quizzes, newQuiz]);
        }
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <div>
                <h3>Quizzer</h3>
            </div>
            <div>
                <h3>You have points</h3>
            </div>
            <div>
                <QuizList
                    quizzes={quizzes}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                ></QuizList>
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add New Quiz
                </Button>
                <AddQuizModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addQuiz={addQuiz}
                ></AddQuizModal>
            </div>
            <div>
                <Form.Group controlId="selectedQuiz">
                    <Form.Label>Please Select a Quiz</Form.Label>
                    <Form.Select
                        value={selectedTitle}
                        onChange={updateSelectedTitle}
                    >
                        {quizzes.map((title: Quiz) => (
                            <option key={"Quiz"} value={title.title}>
                                {title.title}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>
                    <h3>You have Selected {selectedTitle}</h3>
                    <QuestionList
                        questionss={selectedQuiz.questions}
                    ></QuestionList>
                </div>
            </div>
        </div>
    );
}
