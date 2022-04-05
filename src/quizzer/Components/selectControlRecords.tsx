//mistake I was making before: just passing in a single quiz
//we should be passing in the entire list of quizzes

import { Form } from "react-bootstrap";
import React, { useState } from "react";
import { Quiz } from "../Interfaces/quiz";
import { QuestionList } from "../Components/QuestionList";

function selectRecordControls({ quizzes }: { quizzes: Quiz[] }): JSX.Element {
    const [selectedTitle, setSelectedTitle] = useState<string>("");
    const [selectedQuiz, setSelectedQuiz] = useState<Quiz>(quizzes[0]);

    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedTitle(event.target.value);

        const ind = quizzes.findIndex(
            (quiz: Quiz): boolean => quiz.title === selectedTitle
        );

        setSelectedQuiz(quizzes[ind]);
    }
    return (
        <div>
            <Form.Group controlId="selectedQuiz">
                <Form.Label>Please Select a Quiz:</Form.Label>
                <Form.Select value={selectedTitle} onChange={updateSelected}>
                    {quizzes.map((quiz: Quiz) => (
                        <option key={quiz.title} value={quiz.title}>
                            {quiz.title}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <h3>You have Selected: {selectedTitle}</h3>
            <QuestionList questionss={selectedQuiz.questions}></QuestionList>
        </div>
    );
}
