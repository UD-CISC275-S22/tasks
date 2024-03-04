import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const copyPublishedQuestions = [...questions];
    const publishedQuestions = copyPublishedQuestions.filter(
        (question) => question.published
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const copy = [...questions];
    const getNonEmptyQuestions = copy.filter(
        (question) =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length > 0
    );
    return getNonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const copy = [...questions];
    const found = copy.find((question) => question.id === id);
    if (found) {
        return found;
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const copy = [...questions];
    const noQuestion = copy.filter((question) => question.id !== id);
    return noQuestion;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const copy = [...questions];
    const justNames = copy.map((question) => question.name);
    return justNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const copyQuestions = [...questions];
    const total = copyQuestions.reduce(
        (totalPoints, question) => totalPoints + question.points,
        0
    );
    return total;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const copyQuestions = [...questions];
    const getSumPublishedPoints = copyQuestions.reduce(
        (totalPoints, question) => {
            if (question.published) {
                return totalPoints + question.points;
            } else {
                return totalPoints;
            }
        },
        0
    );
    return getSumPublishedPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const copy = [...questions];
    const headers = ["id", "name", "options", "points", "published"];
    const rows = copy.map((question) =>
        [
            question.id,
            question.name,
            question.options.length,
            question.points,
            question.published
        ].join(",")
    );
    return [headers.join(","), ...rows].join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const copy = [...questions];
    const answers = copy.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));

    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const copy = [...questions];
    const published = copy.map((question) => ({
        ...question,
        published: true
    }));

    return published;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const copy = [...questions];
    if (copy.length === 0) {
        return true;
    }
    const firstQuestionType = questions[0].type;

    for (let i = 1; i < questions.length; i++) {
        if (questions[i].type !== firstQuestionType) {
            return false;
        }
    }

    return true;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion: Question = {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
    const newQuestionsArray = [...questions, newQuestion];
    return newQuestionsArray;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const copyQuestions = [...questions];
    const removedQuestions = copyQuestions.map((question) => {
        if (question.id === targetId) {
            return { ...question, name: newName };
        } else {
            return question;
        }
    });

    return removedQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const copyQuestions = [...questions];
    const updatedQuestions = copyQuestions.map((question) => {
        if (question.id === targetId) {
            const updatedQuestion: Question = {
                ...question,
                type: newQuestionType
            };

            if (newQuestionType !== "multiple_choice_question") {
                updatedQuestion.options = [];
            }

            return updatedQuestion;
        } else {
            return question;
        }
    });

    return updatedQuestions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const copyQuestions = [...questions];
    const updatedQuestions = copyQuestions.map((question) => {
        if (question.id === targetId) {
            const updatedOptions = [...question.options];

            if (targetOptionIndex === -1) {
                updatedOptions.push(newOption);
            } else {
                updatedOptions[targetOptionIndex] = newOption;
            }
            return {
                ...question,
                options: updatedOptions
            };
        } else {
            return question;
        }
    });

    return updatedQuestions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    //const copyQuestions = [...questions];
    const newQuestions: Question[] = [];

    for (const question of questions) {
        newQuestions.push(question);

        if (question.id === targetId) {
            const duplicate = duplicateQuestion(newId, question);
            newQuestions.push(duplicate);
        }
    }

    return newQuestions;
}
