import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { Question, QuestionType } from "../interfaces/questioncopy";
import { QuizList } from "./QuizList";
import { AddQuizModal } from "./AddQuizModal";

import "./Quizzer.css";
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

export const Quizzer = () => {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    const [showAddModal, setShowAddModal] = useState(false);

    function editQuiz(qId: number, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((q: Quiz): Quiz => (q.id === qId ? newQuiz : q))
        );
    }

    function addQuiz(title: string, body: string) {
        //fixed this
        const newQuiz: Quiz = {
            title: title,
            body: body,
            id: quizzes.length,
            published: false,
            questionList: []
        };
        setQuizzes([...quizzes, newQuiz]);
    }

    function deleteQuiz(qId: number) {
        setQuizzes(quizzes.filter((q: Quiz): boolean => qId !== q.id));
    }

    const handleShowModal = () => setShowAddModal(true);
    const handleCloseModal = () => setShowAddModal(false);

    return (
        <div className="quizzer">
            <QuizList
                quizzes={quizzes}
                editQuiz={editQuiz}
                deleteQuiz={deleteQuiz}
                showModal={handleShowModal}
            ></QuizList>
            <AddQuizModal
                show={showAddModal}
                handleClose={handleCloseModal}
                addQuiz={addQuiz}
            ></AddQuizModal>
            <hr />
            <h2 style={{ color: "white" }}>Application Sketch</h2>
            {/* <img src={require("./sketchFINAL.jpg")} /> */}
            <hr />
            <div style={{ color: "white" }}>
                <h2>Completed Features</h2>
                <ul className="completedList">
                    <li>
                        {" "}
                        Users can see a list of quizzes, including the quizzes
                        title, description, and how many questions it has
                        (TESTED)
                    </li>
                    <li>
                        Users can select a specific quiz to see the questions,
                        including the questions name, body, and points (TESTED)
                    </li>
                    <li>
                        Quiz questions can be of AT LEAST two types: a short
                        answer question or multiple choice question (TESTED)
                    </li>
                    <li>
                        Users can enter or choose an answer for a quiz question,
                        and be told if they are correct (TESTED)
                    </li>
                    <li>
                        Users can see how many total points they have earned
                        (TESTED)
                    </li>
                    <li>
                        Users can clear out their existing answers for a quiz
                        (TESTED)
                    </li>
                    <li>Users can publish or unpublish a question (TESTED)</li>
                    <li>
                        Users can filter the questions in a list so that only
                        published questions are shown (TESTED)
                    </li>
                    <li>
                        Users can edit the questions and fields of a quiz
                        (TESTED)
                    </li>
                    <li>Users can add a new quiz question (TESTED)</li>
                    <li>Users can delete an existing quiz question (TESTED)</li>
                    <li>Users can reorder quiz questions (TESTED)</li>
                    <li>Users can add a new quiz (TESTED)</li>
                    <li>Users can delete an existing quiz (TESTED)</li>
                </ul>
            </div>
        </div>
    );
};
