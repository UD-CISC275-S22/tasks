import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/** Function 1:
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => question.published);
}

/** Function 2:
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => {
        return (
            question.body.length !== 0 ||
            question.expected.length !== 0 ||
            question.options.length !== 0
        );
    });
}

/*** Function 3:
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const found = questions.find((question) => question.id === id);
    if (found === undefined) {
        return null;
    }
    return found;
}

/** Function 4:
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((question) => question.id !== id);
}

/*** Function 5:
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question) => question.name);
}

/*** Function 6:
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce((total, question) => total + question.points, 0);
}

/*** Function 7
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return sumPoints(getPublishedQuestions(questions));
}

/*** Function 8:
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
    const firstLine = "id,name,options,points,published";
    const questionsCSV = questions.map(
        (question) =>
            `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
    );
    return [firstLine, ...questionsCSV].join("\n");
}

/** Function 9:
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
}

/*** Function 10:
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => ({
        ...question,
        published: true
    }));
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length <= 1) {
        return true;
    }
    const firstone = questions[0].type;
    return questions.every((question) => question.type === firstone);
}

/*** Function 11:
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
    const blanky = makeBlankQuestion(id, name, type);
    return [...questions, blanky];
}

/*** Function 12:
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const found = findQuestion(questions, targetId);
    if (found === null) {
        return questions;
    }
    return questions.map((question) => {
        if (question.id === targetId) {
            return { ...question, name: newName };
        }
        return question;
    });
}

/*** Function 13:
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
    const found = findQuestion(questions, targetId);
    if (found === null) {
        return questions;
    }
    return questions.map((question) => {
        if (question.id === targetId) {
            const update: Question = { ...question, type: newQuestionType };
            if (newQuestionType !== "multiple_choice_question") {
                update.options = [];
            }
            return update;
        }
        return question;
    });
}

/** Function 14:
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
    const found = findQuestion(questions, targetId);
    if (found === null) {
        return questions;
    }
    const updatedQuestions = questions.map((question) => {
        if (question.id === targetId) {
            const updatedQuestion: Question = {
                ...question,
                options: [...question.options]
            };
            if (targetOptionIndex === -1) {
                updatedQuestion.options.push(newOption);
            } else if (
                targetOptionIndex >= 0 &&
                targetOptionIndex < updatedQuestion.options.length
            ) {
                updatedQuestion.options[targetOptionIndex] = newOption;
            }
            return updatedQuestion;
        }
        return question;
    });
    return updatedQuestions;
}

/*** Function 15:
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function findQuestionIndexById(
    questions: Question[],
    id: number
): number {
    return questions.findIndex((question) => question.id === id);
}

export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const found = findQuestion(questions, targetId);
    const indexof = findQuestionIndexById(questions, targetId);
    if (found === null) {
        return questions;
    }
    const duplicated = duplicateQuestion(newId, found);
    const updatedQuestions = [
        ...questions.slice(0, indexof + 1),
        duplicated,
        ...questions.slice(indexof + 1)
    ];
    return updatedQuestions;
}
