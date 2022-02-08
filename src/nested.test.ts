import { Question } from "./interfaces/question";
import { getPublishedQuestions } from "./nested";
import testQuestionData from "./data/questions.json";
import backupQuestionData from "./data/questions.json";

const { BLANK_QUESTIONS, SIMPLE_QUESTIONS }: Record<string, Question[]> =
    // Typecast the test data that we imported to be a record matching
    //  strings to the question list
    testQuestionData as Record<string, Question[]>;

// We have backup versions of the data to make sure all changes are immutable
const {
    BLANK_QUESTIONS: BACKUP_BLANK_QUESTIONS,
    SIMPLE_QUESTIONS: BACKUP_SIMPLE_QUESTIONS
}: Record<string, Question[]> = backupQuestionData as Record<
    string,
    Question[]
>;

////////////////////////////////////////////
// Actual tests

describe("Testing the Question[] functions", () => {
    //////////////////////////////////
    // getPublishedQuestions

    test("Testing the getPublishedQuestions function", () => {
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
                published: true
            },
            {
                id: 5,
                name: "Colors",
                body: "Which of these is a color?",
                type: "multiple_choice_question",
                options: ["red", "apple", "firetruck"],
                expected: "red",
                points: 1,
                published: true
            }
        ]);
    });

    afterEach(() => {
        expect(BLANK_QUESTIONS).toEqual(BACKUP_BLANK_QUESTIONS);
        expect(SIMPLE_QUESTIONS).toEqual(BACKUP_SIMPLE_QUESTIONS);
    });
});
