import React, { useState } from "react";
import { quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";
import { selectQuiz } from "./selectQuiz";

const worldCapitals: Question[] = [
    {
        id: 1,
        name: "Question 1",
        body: "What is the capital of France?",
        type: "multiple_choice_question",
        options: ["Berlin", "Paris", "London", "Madrid"],
        expected: "Paris",
        points: 1,
        published: true
    },

    {
        id: 2,
        name: "Question 2",
        body: "What is the capital of Italy?",
        type: "multiple_choice_question",
        options: ["Naples", "Milan", "Venice", "Rome"],
        expected: "Rome",
        points: 2,
        published: true
    },
    {
        id: 3,
        name: "Question 3",
        body: "What is the capital of Japan?",
        type: "multiple_choice_question",
        options: ["Osaka", "Rome", "Kyoto", "Hiroshima"],
        expected: "Tokyo",
        points: 2,
        published: true
    },
    {
        id: 4,
        name: "Question 4",
        body: "What is the capital of India?",
        type: "multiple_choice_question",
        options: ["Bangalore", "Mumbai", "New Delhi", "Kolkata"],
        expected: "New Delhi",
        points: 3,
        published: true
    },
    {
        id: 5,
        name: "Question 5",
        body: "What is the capital of Brazil?",
        type: "multiple_choice_question",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        expected: "Brasília",
        points: 1,
        published: true
    }
];

const planets: Question[] = [
    {
        id: 1,
        name: "Question 1",
        body: "Which planet is known as the 'Red Planet'?",
        type: "short_answer_question",
        options: [""],
        expected: "Mars",
        points: 1,
        published: true
    },

    {
        id: 2,
        name: "Question 2",
        body: "Which planet is the largest in our solar system?",
        type: "short_answer_question",
        options: [""],
        expected: "Jupiter",
        points: 2,
        published: true
    },

    {
        id: 3,
        name: "Question 3",
        body: "Which planet is closest to the Sun?",
        type: "short_answer_question",
        options: [""],
        expected: "Mercury",
        points: 3,
        published: true
    },

    {
        id: 4,
        name: "Question 4",
        body: "Which planet is known for its beautiful rings?",
        type: "short_answer_question",
        options: [""],
        expected: "Saturn",
        points: 4,
        published: true
    },

    {
        id: 5,
        name: "Question 2",
        body: "Which planet is often referred to as the 'Evening Star' or 'Morning Star' due to its bright appearance in the sky?",
        type: "short_answer_question",
        options: [""],
        expected: "Venus",
        points: 5,
        published: true
    }
];
// Users can see how many total points they have earned
// Users can clear out their existing answers for a quiz
// Users can publish or unpublish a question
// Users can filter the questions in a list so that only published questions are shown
// Users can edit the questions and fields of a quiz
// Users can add a new quiz question
// Users can delete an existing quiz question
// Users can reorder quiz questions
// Users can add a new quiz
// Users can delete an existing quiz

export function Quizzer(): JSX.Element {
    const [viewPreview, setViewPreview] = useState<boolean>(true);
    const [selectedQuiz, setSelectedQuiz] = useState<quiz>({
        Title: "",
        description: "",
        question: []
    });

    function changePreview(quiz: quiz) {
        setSelectedQuiz(quiz);
        setViewPreview(false);
    }

    const quizArr: quiz[] = [];
    quizArr.push({
        Title: "Capitals",
        description: "What are capitals around the world",
        question: worldCapitals
    });

    quizArr.push({
        Title: "Planets",
        description: "How much do you know about the Solar System?",
        question: planets
    });
    return (
        <div>
            {viewPreview &&
                quizArr.map((quizItem: quiz) => (
                    <div key={quizItem.Title}>
                        <h3>{quizItem.Title}</h3>
                        <br />
                        <h4>{quizItem.description}</h4>
                        <br />
                        Number of Questions: {quizItem.question.length}
                        <br />
                        <button onClick={() => changePreview(quizItem)}>
                            Start Quiz
                        </button>
                    </div>
                ))}
            {!viewPreview && selectQuiz({ selector: selectedQuiz })}
            {viewPreview && <hr />}
        </div>
    );
}
