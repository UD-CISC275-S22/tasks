import { Question } from "./interfaces/question";
import {
    getPublishedQuestions,
    getNonEmptyQuestions,
    findQuestion,
    removeQuestion,
    getNames,
    sumPoints,
    sumPublishedPoints,
    toCSV,
    makeAnswers,
    publishAll,
    sameType,
    addNewQuestion,
    renameQuestionById,
    changeQuestionTypeById,
    editOption,
<<<<<<< HEAD
    duplicateQuestionInArray,
=======
    duplicateQuestionInArray
>>>>>>> upstream/task-state
} from "./nested";
import testQuestionData from "./data/questions.json";
import backupQuestionData from "./data/questions.json";

const {
    BLANK_QUESTIONS,
    SIMPLE_QUESTIONS,
    TRIVIA_QUESTIONS,
    EMPTY_QUESTIONS,
<<<<<<< HEAD
    SIMPLE_QUESTIONS_2,
=======
    SIMPLE_QUESTIONS_2
>>>>>>> upstream/task-state
}: Record<string, Question[]> =
    // Typecast the test data that we imported to be a record matching
    //  strings to the question list
    testQuestionData as Record<string, Question[]>;

// We have backup versions of the data to make sure all changes are immutable
const {
    BLANK_QUESTIONS: BACKUP_BLANK_QUESTIONS,
    SIMPLE_QUESTIONS: BACKUP_SIMPLE_QUESTIONS,
    TRIVIA_QUESTIONS: BACKUP_TRIVIA_QUESTIONS,
    EMPTY_QUESTIONS: BACKUP_EMPTY_QUESTIONS,
<<<<<<< HEAD
    SIMPLE_QUESTIONS_2: BACKUP_SIMPLE_QUESTIONS_2,
=======
    SIMPLE_QUESTIONS_2: BACKUP_SIMPLE_QUESTIONS_2
>>>>>>> upstream/task-state
}: Record<string, Question[]> = backupQuestionData as Record<
    string,
    Question[]
>;

const NEW_BLANK_QUESTION = {
    id: 142,
    name: "A new question",
    body: "",
    type: "short_answer_question",
    options: [],
    expected: "",
    points: 1,
<<<<<<< HEAD
    published: false,
=======
    published: false
>>>>>>> upstream/task-state
};

const NEW_TRIVIA_QUESTION = {
    id: 449,
    name: "Colors",
    body: "",
    type: "multiple_choice_question",
    options: [],
    expected: "",
    /*body: "The official colors of UD are Blue and ...?",
    type: "multiple_choice_question",
    options: ["Black, like my soul", "Blue again, we're tricky.", "#FFD200"],
    expected: "#FFD200",*/
    points: 1,
<<<<<<< HEAD
    published: false,
=======
    published: false
>>>>>>> upstream/task-state
};

////////////////////////////////////////////
// Actual tests

describe("Testing the Question[] functions", () => {
    //////////////////////////////////
    // getPublishedQuestions

<<<<<<< HEAD
    test("(3 pts) Testing the getPublishedQuestions function", () => {
=======
    test("Testing the getPublishedQuestions function", () => {
>>>>>>> upstream/task-state
        expect(getPublishedQuestions(BLANK_QUESTIONS)).toEqual([]);
        expect(getPublishedQuestions(SIMPLE_QUESTIONS)).toEqual([
            {
                id: 1,
                name: "Addition",
                body: "What is 2+2?",
                type: "short_answer_question",
                options: [],
                expected: "4",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 5,
                name: "Colors",
                body: "Which of these is a color?",
                type: "multiple_choice_question",
                options: ["red", "apple", "firetruck"],
                expected: "red",
                points: 1,
<<<<<<< HEAD
                published: true,
            },
        ]);
        expect(getPublishedQuestions(TRIVIA_QUESTIONS)).toEqual([]);
        expect(getPublishedQuestions(SIMPLE_QUESTIONS_2)).toEqual(
            BACKUP_SIMPLE_QUESTIONS_2,
=======
                published: true
            }
        ]);
        expect(getPublishedQuestions(TRIVIA_QUESTIONS)).toEqual([]);
        expect(getPublishedQuestions(SIMPLE_QUESTIONS_2)).toEqual(
            BACKUP_SIMPLE_QUESTIONS_2
>>>>>>> upstream/task-state
        );
        expect(getPublishedQuestions(EMPTY_QUESTIONS)).toEqual([
            {
                id: 1,
                name: "Empty 1",
                body: "This question is not empty, right?",
                type: "multiple_choice_question",
                options: ["correct", "it is", "not"],
                expected: "correct",
                points: 5,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Empty 2",
                body: "",
                type: "multiple_choice_question",
                options: ["this", "one", "is", "not", "empty", "either"],
                expected: "one",
                points: 5,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 3,
                name: "Empty 3",
                body: "This questions is not empty either!",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 5,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 4,
                name: "Empty 4",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "Even this one is not empty",
                points: 5,
<<<<<<< HEAD
                published: true,
            },
        ]);
    });

    test("(3 pts) Testing the getNonEmptyQuestions functions", () => {
        expect(getNonEmptyQuestions(BLANK_QUESTIONS)).toEqual([]);
        expect(getNonEmptyQuestions(SIMPLE_QUESTIONS)).toEqual(
            BACKUP_SIMPLE_QUESTIONS,
        );
        expect(getNonEmptyQuestions(TRIVIA_QUESTIONS)).toEqual(
            BACKUP_TRIVIA_QUESTIONS,
        );
        expect(getNonEmptyQuestions(SIMPLE_QUESTIONS_2)).toEqual(
            BACKUP_SIMPLE_QUESTIONS_2,
=======
                published: true
            }
        ]);
    });

    test("Testing the getNonEmptyQuestions functions", () => {
        expect(getNonEmptyQuestions(BLANK_QUESTIONS)).toEqual([]);
        expect(getNonEmptyQuestions(SIMPLE_QUESTIONS)).toEqual(
            BACKUP_SIMPLE_QUESTIONS
        );
        expect(getNonEmptyQuestions(TRIVIA_QUESTIONS)).toEqual(
            BACKUP_TRIVIA_QUESTIONS
        );
        expect(getNonEmptyQuestions(SIMPLE_QUESTIONS_2)).toEqual(
            BACKUP_SIMPLE_QUESTIONS_2
>>>>>>> upstream/task-state
        );
        expect(getNonEmptyQuestions(EMPTY_QUESTIONS)).toEqual([
            {
                id: 1,
                name: "Empty 1",
                body: "This question is not empty, right?",
                type: "multiple_choice_question",
                options: ["correct", "it is", "not"],
                expected: "correct",
                points: 5,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Empty 2",
                body: "",
                type: "multiple_choice_question",
                options: ["this", "one", "is", "not", "empty", "either"],
                expected: "one",
                points: 5,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 3,
                name: "Empty 3",
                body: "This questions is not empty either!",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 5,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 4,
                name: "Empty 4",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "Even this one is not empty",
                points: 5,
<<<<<<< HEAD
                published: true,
            },
        ]);
    });

    test("(3 pts) Testing the findQuestion function", () => {
=======
                published: true
            }
        ]);
    });

    test("Testing the findQuestion function", () => {
>>>>>>> upstream/task-state
        expect(findQuestion(BLANK_QUESTIONS, 1)).toEqual(BLANK_QUESTIONS[0]);
        expect(findQuestion(BLANK_QUESTIONS, 47)).toEqual(BLANK_QUESTIONS[1]);
        expect(findQuestion(BLANK_QUESTIONS, 2)).toEqual(BLANK_QUESTIONS[2]);
        expect(findQuestion(BLANK_QUESTIONS, 3)).toEqual(null);
        expect(findQuestion(SIMPLE_QUESTIONS, 1)).toEqual(SIMPLE_QUESTIONS[0]);
        expect(findQuestion(SIMPLE_QUESTIONS, 2)).toEqual(SIMPLE_QUESTIONS[1]);
        expect(findQuestion(SIMPLE_QUESTIONS, 5)).toEqual(SIMPLE_QUESTIONS[2]);
        expect(findQuestion(SIMPLE_QUESTIONS, 9)).toEqual(SIMPLE_QUESTIONS[3]);
        expect(findQuestion(SIMPLE_QUESTIONS, 6)).toEqual(null);
        expect(findQuestion(SIMPLE_QUESTIONS_2, 478)).toEqual(
<<<<<<< HEAD
            SIMPLE_QUESTIONS_2[0],
=======
            SIMPLE_QUESTIONS_2[0]
>>>>>>> upstream/task-state
        );
        expect(findQuestion([], 0)).toEqual(null);
    });

<<<<<<< HEAD
    test("(3 pts) Testing the removeQuestion", () => {
=======
    test("Testing the removeQuestion", () => {
>>>>>>> upstream/task-state
        expect(removeQuestion(BLANK_QUESTIONS, 1)).toEqual([
            {
                id: 47,
                name: "My New Question",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Question 2",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
            },
=======
                published: false
            }
>>>>>>> upstream/task-state
        ]);
        expect(removeQuestion(BLANK_QUESTIONS, 47)).toEqual([
            {
                id: 1,
                name: "Question 1",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Question 2",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
            },
=======
                published: false
            }
>>>>>>> upstream/task-state
        ]);
        expect(removeQuestion(BLANK_QUESTIONS, 2)).toEqual([
            {
                id: 1,
                name: "Question 1",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 47,
                name: "My New Question",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
            },
=======
                published: false
            }
>>>>>>> upstream/task-state
        ]);
        expect(removeQuestion(SIMPLE_QUESTIONS, 9)).toEqual([
            {
                id: 1,
                name: "Addition",
                body: "What is 2+2?",
                type: "short_answer_question",
                options: [],
                expected: "4",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Letters",
                body: "What is the last letter of the English alphabet?",
                type: "short_answer_question",
                options: [],
                expected: "Z",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 5,
                name: "Colors",
                body: "Which of these is a color?",
                type: "multiple_choice_question",
                options: ["red", "apple", "firetruck"],
                expected: "red",
                points: 1,
<<<<<<< HEAD
                published: true,
            },
=======
                published: true
            }
>>>>>>> upstream/task-state
        ]);
        expect(removeQuestion(SIMPLE_QUESTIONS, 5)).toEqual([
            {
                id: 1,
                name: "Addition",
                body: "What is 2+2?",
                type: "short_answer_question",
                options: [],
                expected: "4",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Letters",
                body: "What is the last letter of the English alphabet?",
                type: "short_answer_question",
                options: [],
                expected: "Z",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 9,
                name: "Shapes",
                body: "What shape can you make with one line?",
                type: "multiple_choice_question",
                options: ["square", "triangle", "circle"],
                expected: "circle",
                points: 2,
<<<<<<< HEAD
                published: false,
            },
        ]);
    });

    test("(3 pts) Testing the getNames function", () => {
        expect(getNames(BLANK_QUESTIONS)).toEqual([
            "Question 1",
            "My New Question",
            "Question 2",
=======
                published: false
            }
        ]);
    });

    test("Testing the getNames function", () => {
        expect(getNames(BLANK_QUESTIONS)).toEqual([
            "Question 1",
            "My New Question",
            "Question 2"
>>>>>>> upstream/task-state
        ]);
        expect(getNames(SIMPLE_QUESTIONS)).toEqual([
            "Addition",
            "Letters",
            "Colors",
<<<<<<< HEAD
            "Shapes",
=======
            "Shapes"
>>>>>>> upstream/task-state
        ]);
        expect(getNames(TRIVIA_QUESTIONS)).toEqual([
            "Mascot",
            "Motto",
<<<<<<< HEAD
            "Goats",
=======
            "Goats"
>>>>>>> upstream/task-state
        ]);
        expect(getNames(SIMPLE_QUESTIONS_2)).toEqual([
            "Students",
            "Importance",
            "Sentience",
            "Danger",
<<<<<<< HEAD
            "Listening",
=======
            "Listening"
>>>>>>> upstream/task-state
        ]);
        expect(getNames(EMPTY_QUESTIONS)).toEqual([
            "Empty 1",
            "Empty 2",
            "Empty 3",
            "Empty 4",
<<<<<<< HEAD
            "Empty 5 (Actual)",
        ]);
    });

    test("(3 pts) Testing the sumPoints function", () => {
=======
            "Empty 5 (Actual)"
        ]);
    });

    test("Testing the sumPoints function", () => {
>>>>>>> upstream/task-state
        expect(sumPoints(BLANK_QUESTIONS)).toEqual(3);
        expect(sumPoints(SIMPLE_QUESTIONS)).toEqual(5);
        expect(sumPoints(TRIVIA_QUESTIONS)).toEqual(20);
        expect(sumPoints(EMPTY_QUESTIONS)).toEqual(25);
        expect(sumPoints(SIMPLE_QUESTIONS_2)).toEqual(300);
    });

<<<<<<< HEAD
    test("(3 pts) Testing the sumPublishedPoints function", () => {
=======
    test("Testing the sumPublishedPoints function", () => {
>>>>>>> upstream/task-state
        expect(sumPublishedPoints(BLANK_QUESTIONS)).toEqual(0);
        expect(sumPublishedPoints(SIMPLE_QUESTIONS)).toEqual(2);
        expect(sumPublishedPoints(TRIVIA_QUESTIONS)).toEqual(0);
        expect(sumPublishedPoints(EMPTY_QUESTIONS)).toEqual(20);
        expect(sumPublishedPoints(SIMPLE_QUESTIONS_2)).toEqual(300);
    });

<<<<<<< HEAD
    test("(3 pts) Testing the toCSV function", () => {
=======
    test("Testing the toCSV function", () => {
>>>>>>> upstream/task-state
        expect(toCSV(BLANK_QUESTIONS)).toEqual(`id,name,options,points,published
1,Question 1,0,1,false
47,My New Question,0,1,false
2,Question 2,0,1,false`);
        expect(toCSV(SIMPLE_QUESTIONS))
            .toEqual(`id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false`);
        expect(toCSV(TRIVIA_QUESTIONS))
            .toEqual(`id,name,options,points,published
1,Mascot,3,7,false
2,Motto,3,3,false
3,Goats,3,10,false`);
        expect(toCSV(EMPTY_QUESTIONS)).toEqual(`id,name,options,points,published
1,Empty 1,3,5,true
2,Empty 2,6,5,true
3,Empty 3,0,5,true
4,Empty 4,0,5,true
5,Empty 5 (Actual),0,5,false`);
        expect(toCSV(SIMPLE_QUESTIONS_2))
            .toEqual(`id,name,options,points,published
478,Students,0,53,true
1937,Importance,0,47,true
479,Sentience,0,40,true
777,Danger,0,60,true
1937,Listening,0,100,true`);
    });

<<<<<<< HEAD
    test("(3 pts) Testing the makeAnswers function", () => {
        expect(makeAnswers(BLANK_QUESTIONS)).toEqual([
            { questionId: 1, correct: false, text: "", submitted: false },
            { questionId: 47, correct: false, text: "", submitted: false },
            { questionId: 2, correct: false, text: "", submitted: false },
=======
    test("Testing the makeAnswers function", () => {
        expect(makeAnswers(BLANK_QUESTIONS)).toEqual([
            { questionId: 1, correct: false, text: "", submitted: false },
            { questionId: 47, correct: false, text: "", submitted: false },
            { questionId: 2, correct: false, text: "", submitted: false }
>>>>>>> upstream/task-state
        ]);
        expect(makeAnswers(SIMPLE_QUESTIONS)).toEqual([
            { questionId: 1, correct: false, text: "", submitted: false },
            { questionId: 2, correct: false, text: "", submitted: false },
            { questionId: 5, correct: false, text: "", submitted: false },
<<<<<<< HEAD
            { questionId: 9, correct: false, text: "", submitted: false },
=======
            { questionId: 9, correct: false, text: "", submitted: false }
>>>>>>> upstream/task-state
        ]);
        expect(makeAnswers(TRIVIA_QUESTIONS)).toEqual([
            { questionId: 1, correct: false, text: "", submitted: false },
            { questionId: 2, correct: false, text: "", submitted: false },
<<<<<<< HEAD
            { questionId: 3, correct: false, text: "", submitted: false },
=======
            { questionId: 3, correct: false, text: "", submitted: false }
>>>>>>> upstream/task-state
        ]);
        expect(makeAnswers(SIMPLE_QUESTIONS_2)).toEqual([
            { questionId: 478, correct: false, text: "", submitted: false },
            { questionId: 1937, correct: false, text: "", submitted: false },
            { questionId: 479, correct: false, text: "", submitted: false },
            { questionId: 777, correct: false, text: "", submitted: false },
<<<<<<< HEAD
            { questionId: 1937, correct: false, text: "", submitted: false },
=======
            { questionId: 1937, correct: false, text: "", submitted: false }
>>>>>>> upstream/task-state
        ]);
        expect(makeAnswers(EMPTY_QUESTIONS)).toEqual([
            { questionId: 1, correct: false, text: "", submitted: false },
            { questionId: 2, correct: false, text: "", submitted: false },
            { questionId: 3, correct: false, text: "", submitted: false },
            { questionId: 4, correct: false, text: "", submitted: false },
<<<<<<< HEAD
            { questionId: 5, correct: false, text: "", submitted: false },
        ]);
    });

    test("(3 pts) Testing the publishAll function", () => {
=======
            { questionId: 5, correct: false, text: "", submitted: false }
        ]);
    });

    test("Testing the publishAll function", () => {
>>>>>>> upstream/task-state
        expect(publishAll(BLANK_QUESTIONS)).toEqual([
            {
                id: 1,
                name: "Question 1",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 47,
                name: "My New Question",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Question 2",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: true,
            },
=======
                published: true
            }
>>>>>>> upstream/task-state
        ]);
        expect(publishAll(SIMPLE_QUESTIONS)).toEqual([
            {
                id: 1,
                name: "Addition",
                body: "What is 2+2?",
                type: "short_answer_question",
                options: [],
                expected: "4",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Letters",
                body: "What is the last letter of the English alphabet?",
                type: "short_answer_question",
                options: [],
                expected: "Z",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 5,
                name: "Colors",
                body: "Which of these is a color?",
                type: "multiple_choice_question",
                options: ["red", "apple", "firetruck"],
                expected: "red",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 9,
                name: "Shapes",
                body: "What shape can you make with one line?",
                type: "multiple_choice_question",
                options: ["square", "triangle", "circle"],
                expected: "circle",
                points: 2,
<<<<<<< HEAD
                published: true,
            },
=======
                published: true
            }
>>>>>>> upstream/task-state
        ]);
        expect(publishAll(TRIVIA_QUESTIONS)).toEqual([
            {
                id: 1,
                name: "Mascot",
                body: "What is the name of the UD Mascot?",
                type: "multiple_choice_question",
                options: ["Bluey", "YoUDee", "Charles the Wonder Dog"],
                expected: "YoUDee",
                points: 7,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Motto",
                body: "What is the University of Delaware's motto?",
                type: "multiple_choice_question",
                options: [
                    "Knowledge is the light of the mind",
                    "Just U Do it",
<<<<<<< HEAD
                    "Nothing, what's the motto with you?",
                ],
                expected: "Knowledge is the light of the mind",
                points: 3,
                published: true,
=======
                    "Nothing, what's the motto with you?"
                ],
                expected: "Knowledge is the light of the mind",
                points: 3,
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 3,
                name: "Goats",
                body: "How many goats are there usually on the Green?",
                type: "multiple_choice_question",
                options: [
                    "Zero, why would there be goats on the green?",
                    "18420",
<<<<<<< HEAD
                    "Two",
                ],
                expected: "Two",
                points: 10,
                published: true,
            },
=======
                    "Two"
                ],
                expected: "Two",
                points: 10,
                published: true
            }
>>>>>>> upstream/task-state
        ]);
        expect(publishAll(EMPTY_QUESTIONS)).toEqual([
            {
                id: 1,
                name: "Empty 1",
                body: "This question is not empty, right?",
                type: "multiple_choice_question",
                options: ["correct", "it is", "not"],
                expected: "correct",
                points: 5,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Empty 2",
                body: "",
                type: "multiple_choice_question",
                options: ["this", "one", "is", "not", "empty", "either"],
                expected: "one",
                points: 5,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 3,
                name: "Empty 3",
                body: "This questions is not empty either!",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 5,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 4,
                name: "Empty 4",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "Even this one is not empty",
                points: 5,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 5,
                name: "Empty 5 (Actual)",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 5,
<<<<<<< HEAD
                published: true,
            },
=======
                published: true
            }
>>>>>>> upstream/task-state
        ]);
        expect(publishAll(SIMPLE_QUESTIONS_2)).toEqual(SIMPLE_QUESTIONS_2);
    });

<<<<<<< HEAD
    test("(3 pts) Testing the sameType function", () => {
=======
    test("Testing the sameType function", () => {
>>>>>>> upstream/task-state
        expect(sameType([])).toEqual(true);
        expect(sameType(BLANK_QUESTIONS)).toEqual(false);
        expect(sameType(SIMPLE_QUESTIONS)).toEqual(false);
        expect(sameType(TRIVIA_QUESTIONS)).toEqual(true);
        expect(sameType(EMPTY_QUESTIONS)).toEqual(false);
        expect(sameType(SIMPLE_QUESTIONS_2)).toEqual(true);
    });

<<<<<<< HEAD
    test("(3 pts) Testing the addNewQuestion function", () => {
        expect(
            addNewQuestion([], 142, "A new question", "short_answer_question"),
=======
    test("Testing the addNewQuestion function", () => {
        expect(
            addNewQuestion([], 142, "A new question", "short_answer_question")
>>>>>>> upstream/task-state
        ).toEqual([NEW_BLANK_QUESTION]);
        expect(
            addNewQuestion(
                BLANK_QUESTIONS,
                142,
                "A new question",
<<<<<<< HEAD
                "short_answer_question",
            ),
=======
                "short_answer_question"
            )
>>>>>>> upstream/task-state
        ).toEqual([...BLANK_QUESTIONS, NEW_BLANK_QUESTION]);
        expect(
            addNewQuestion(
                TRIVIA_QUESTIONS,
                449,
                "Colors",
<<<<<<< HEAD
                "multiple_choice_question",
            ),
        ).toEqual([...TRIVIA_QUESTIONS, NEW_TRIVIA_QUESTION]);
    });

    test("(3 pts) Testing the renameQuestionById function", () => {
=======
                "multiple_choice_question"
            )
        ).toEqual([...TRIVIA_QUESTIONS, NEW_TRIVIA_QUESTION]);
    });

    test("Testing the renameQuestionById function", () => {
>>>>>>> upstream/task-state
        expect(renameQuestionById(BLANK_QUESTIONS, 1, "New Name")).toEqual([
            {
                id: 1,
                name: "New Name",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 47,
                name: "My New Question",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Question 2",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
            },
=======
                published: false
            }
>>>>>>> upstream/task-state
        ]);
        expect(renameQuestionById(BLANK_QUESTIONS, 47, "Another Name")).toEqual(
            [
                {
                    id: 1,
                    name: "Question 1",
                    body: "",
                    type: "multiple_choice_question",
                    options: [],
                    expected: "",
                    points: 1,
<<<<<<< HEAD
                    published: false,
=======
                    published: false
>>>>>>> upstream/task-state
                },
                {
                    id: 47,
                    name: "Another Name",
                    body: "",
                    type: "multiple_choice_question",
                    options: [],
                    expected: "",
                    points: 1,
<<<<<<< HEAD
                    published: false,
=======
                    published: false
>>>>>>> upstream/task-state
                },
                {
                    id: 2,
                    name: "Question 2",
                    body: "",
                    type: "short_answer_question",
                    options: [],
                    expected: "",
                    points: 1,
<<<<<<< HEAD
                    published: false,
                },
            ],
=======
                    published: false
                }
            ]
>>>>>>> upstream/task-state
        );
        expect(renameQuestionById(SIMPLE_QUESTIONS, 5, "Colours")).toEqual([
            {
                id: 1,
                name: "Addition",
                body: "What is 2+2?",
                type: "short_answer_question",
                options: [],
                expected: "4",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Letters",
                body: "What is the last letter of the English alphabet?",
                type: "short_answer_question",
                options: [],
                expected: "Z",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 5,
                name: "Colours",
                body: "Which of these is a color?",
                type: "multiple_choice_question",
                options: ["red", "apple", "firetruck"],
                expected: "red",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 9,
                name: "Shapes",
                body: "What shape can you make with one line?",
                type: "multiple_choice_question",
                options: ["square", "triangle", "circle"],
                expected: "circle",
                points: 2,
<<<<<<< HEAD
                published: false,
            },
        ]);
    });

    test("(3 pts) Test the changeQuestionTypeById function", () => {
=======
                published: false
            }
        ]);
    });

    test("Test the changeQuestionTypeById function", () => {
>>>>>>> upstream/task-state
        expect(
            changeQuestionTypeById(
                BLANK_QUESTIONS,
                1,
<<<<<<< HEAD
                "multiple_choice_question",
            ),
        ).toEqual(BLANK_QUESTIONS);
        expect(
            changeQuestionTypeById(BLANK_QUESTIONS, 1, "short_answer_question"),
=======
                "multiple_choice_question"
            )
        ).toEqual(BLANK_QUESTIONS);
        expect(
            changeQuestionTypeById(BLANK_QUESTIONS, 1, "short_answer_question")
>>>>>>> upstream/task-state
        ).toEqual([
            {
                id: 1,
                name: "Question 1",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 47,
                name: "My New Question",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Question 2",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
            },
        ]);
        expect(
            changeQuestionTypeById(
                BLANK_QUESTIONS,
                47,
                "short_answer_question",
            ),
=======
                published: false
            }
        ]);
        expect(
            changeQuestionTypeById(BLANK_QUESTIONS, 47, "short_answer_question")
>>>>>>> upstream/task-state
        ).toEqual([
            {
                id: 1,
                name: "Question 1",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 47,
                name: "My New Question",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Question 2",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
            },
        ]);
        expect(
            changeQuestionTypeById(
                TRIVIA_QUESTIONS,
                3,
                "short_answer_question",
            ),
=======
                published: false
            }
        ]);
        expect(
            changeQuestionTypeById(TRIVIA_QUESTIONS, 3, "short_answer_question")
>>>>>>> upstream/task-state
        ).toEqual([
            {
                id: 1,
                name: "Mascot",
                body: "What is the name of the UD Mascot?",
                type: "multiple_choice_question",
                options: ["Bluey", "YoUDee", "Charles the Wonder Dog"],
                expected: "YoUDee",
                points: 7,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Motto",
                body: "What is the University of Delaware's motto?",
                type: "multiple_choice_question",
                options: [
                    "Knowledge is the light of the mind",
                    "Just U Do it",
<<<<<<< HEAD
                    "Nothing, what's the motto with you?",
                ],
                expected: "Knowledge is the light of the mind",
                points: 3,
                published: false,
=======
                    "Nothing, what's the motto with you?"
                ],
                expected: "Knowledge is the light of the mind",
                points: 3,
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 3,
                name: "Goats",
                body: "How many goats are there usually on the Green?",
                type: "short_answer_question",
                options: [],
                expected: "Two",
                points: 10,
<<<<<<< HEAD
                published: false,
            },
        ]);
    });

    test("(3 pts) Testing the editOption function", () => {
=======
                published: false
            }
        ]);
    });

    test("Testing the addEditQuestionOption function", () => {
>>>>>>> upstream/task-state
        expect(editOption(BLANK_QUESTIONS, 1, -1, "NEW OPTION")).toEqual([
            {
                id: 1,
                name: "Question 1",
                body: "",
                type: "multiple_choice_question",
                options: ["NEW OPTION"],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 47,
                name: "My New Question",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Question 2",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
            },
=======
                published: false
            }
>>>>>>> upstream/task-state
        ]);
        expect(editOption(BLANK_QUESTIONS, 47, -1, "Another option")).toEqual([
            {
                id: 1,
                name: "Question 1",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 47,
                name: "My New Question",
                body: "",
                type: "multiple_choice_question",
                options: ["Another option"],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Question 2",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
            },
=======
                published: false
            }
>>>>>>> upstream/task-state
        ]);
        expect(editOption(SIMPLE_QUESTIONS, 5, -1, "newspaper")).toEqual([
            {
                id: 1,
                name: "Addition",
                body: "What is 2+2?",
                type: "short_answer_question",
                options: [],
                expected: "4",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Letters",
                body: "What is the last letter of the English alphabet?",
                type: "short_answer_question",
                options: [],
                expected: "Z",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 5,
                name: "Colors",
                body: "Which of these is a color?",
                type: "multiple_choice_question",
                options: ["red", "apple", "firetruck", "newspaper"],
                expected: "red",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 9,
                name: "Shapes",
                body: "What shape can you make with one line?",
                type: "multiple_choice_question",
                options: ["square", "triangle", "circle"],
                expected: "circle",
                points: 2,
<<<<<<< HEAD
                published: false,
            },
=======
                published: false
            }
>>>>>>> upstream/task-state
        ]);
        expect(editOption(SIMPLE_QUESTIONS, 5, 0, "newspaper")).toEqual([
            {
                id: 1,
                name: "Addition",
                body: "What is 2+2?",
                type: "short_answer_question",
                options: [],
                expected: "4",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Letters",
                body: "What is the last letter of the English alphabet?",
                type: "short_answer_question",
                options: [],
                expected: "Z",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 5,
                name: "Colors",
                body: "Which of these is a color?",
                type: "multiple_choice_question",
                options: ["newspaper", "apple", "firetruck"],
                expected: "red",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 9,
                name: "Shapes",
                body: "What shape can you make with one line?",
                type: "multiple_choice_question",
                options: ["square", "triangle", "circle"],
                expected: "circle",
                points: 2,
<<<<<<< HEAD
                published: false,
            },
=======
                published: false
            }
>>>>>>> upstream/task-state
        ]);

        expect(editOption(SIMPLE_QUESTIONS, 5, 2, "newspaper")).toEqual([
            {
                id: 1,
                name: "Addition",
                body: "What is 2+2?",
                type: "short_answer_question",
                options: [],
                expected: "4",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Letters",
                body: "What is the last letter of the English alphabet?",
                type: "short_answer_question",
                options: [],
                expected: "Z",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 5,
                name: "Colors",
                body: "Which of these is a color?",
                type: "multiple_choice_question",
                options: ["red", "apple", "newspaper"],
                expected: "red",
                points: 1,
<<<<<<< HEAD
                published: true,
=======
                published: true
>>>>>>> upstream/task-state
            },
            {
                id: 9,
                name: "Shapes",
                body: "What shape can you make with one line?",
                type: "multiple_choice_question",
                options: ["square", "triangle", "circle"],
                expected: "circle",
                points: 2,
<<<<<<< HEAD
                published: false,
            },
        ]);
    });

    test("(3 pts) Testing the duplicateQuestionInArray function", () => {
=======
                published: false
            }
        ]);
    });

    test("Testing the duplicateQuestionInArray function", () => {
>>>>>>> upstream/task-state
        expect(duplicateQuestionInArray(BLANK_QUESTIONS, 1, 27)).toEqual([
            {
                id: 1,
                name: "Question 1",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 27,
                name: "Copy of Question 1",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 47,
                name: "My New Question",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Question 2",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
            },
=======
                published: false
            }
>>>>>>> upstream/task-state
        ]);
        expect(duplicateQuestionInArray(BLANK_QUESTIONS, 47, 19)).toEqual([
            {
                id: 1,
                name: "Question 1",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 47,
                name: "My New Question",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 19,
                name: "Copy of My New Question",
                body: "",
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Question 2",
                body: "",
                type: "short_answer_question",
                options: [],
                expected: "",
                points: 1,
<<<<<<< HEAD
                published: false,
            },
=======
                published: false
            }
>>>>>>> upstream/task-state
        ]);
        expect(duplicateQuestionInArray(TRIVIA_QUESTIONS, 3, 111)).toEqual([
            {
                id: 1,
                name: "Mascot",
                body: "What is the name of the UD Mascot?",
                type: "multiple_choice_question",
                options: ["Bluey", "YoUDee", "Charles the Wonder Dog"],
                expected: "YoUDee",
                points: 7,
<<<<<<< HEAD
                published: false,
=======
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 2,
                name: "Motto",
                body: "What is the University of Delaware's motto?",
                type: "multiple_choice_question",
                options: [
                    "Knowledge is the light of the mind",
                    "Just U Do it",
<<<<<<< HEAD
                    "Nothing, what's the motto with you?",
                ],
                expected: "Knowledge is the light of the mind",
                points: 3,
                published: false,
=======
                    "Nothing, what's the motto with you?"
                ],
                expected: "Knowledge is the light of the mind",
                points: 3,
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 3,
                name: "Goats",
                body: "How many goats are there usually on the Green?",
                type: "multiple_choice_question",
                options: [
                    "Zero, why would there be goats on the green?",
                    "18420",
<<<<<<< HEAD
                    "Two",
                ],
                expected: "Two",
                points: 10,
                published: false,
=======
                    "Two"
                ],
                expected: "Two",
                points: 10,
                published: false
>>>>>>> upstream/task-state
            },
            {
                id: 111,
                name: "Copy of Goats",
                body: "How many goats are there usually on the Green?",
                type: "multiple_choice_question",
                options: [
                    "Zero, why would there be goats on the green?",
                    "18420",
<<<<<<< HEAD
                    "Two",
                ],
                expected: "Two",
                points: 10,
                published: false,
            },
=======
                    "Two"
                ],
                expected: "Two",
                points: 10,
                published: false
            }
>>>>>>> upstream/task-state
        ]);
    });

    afterEach(() => {
        expect(BLANK_QUESTIONS).toEqual(BACKUP_BLANK_QUESTIONS);
        expect(SIMPLE_QUESTIONS).toEqual(BACKUP_SIMPLE_QUESTIONS);
        expect(TRIVIA_QUESTIONS).toEqual(BACKUP_TRIVIA_QUESTIONS);
        expect(SIMPLE_QUESTIONS_2).toEqual(BACKUP_SIMPLE_QUESTIONS_2);
        expect(EMPTY_QUESTIONS).toEqual(BACKUP_EMPTY_QUESTIONS);
    });
});
