import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedOnly = questions.filter(
        (question: Question): boolean => question.published,
    );
    return publishedOnly;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length > 0,
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const findID = questions.find(
        (question: Question): boolean => question.id === id,
    );
    if (findID) {
        return findID;
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const findID = questions.find(
        (question: Question): boolean => question.id === id,
    );
    if (findID) {
        const notID = questions.filter(
            (question: Question): boolean => question.id !== findID.id,
        );
        return notID;
    }
    return questions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const justNames = questions.map(
        (question: Question): string => question.name,
    );
    return justNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const justPoints = questions.map(
        (question: Question): number => question.points,
    );
    const sum = justPoints.reduce((points, curr) => points + curr, 0);
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const justPublished = questions.filter(
        (question: Question): boolean => question.published,
    );
    const justPoints = justPublished.map(
        (question: Question): number => question.points,
    );
    const sumPublished = justPoints.reduce((points, curr) => points + curr, 0);
    return sumPublished;
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
    const stringVersion = questions.map(
        (question: Question): string =>
            question.id.toString() +
            "," +
            question.name +
            "," +
            question.options.length +
            "," +
            question.points +
            "," +
            question.published.toString(),
    );
    const allCombined = stringVersion.join("\n");
    return "id,name,options,points,published\n" + allCombined;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            correct: false,
            text: "",
            submitted: false,
        }),
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const allPublished = questions.map(
        (question: Question): Question =>
            !question.published ? { ...question, published: true } : question,
    );
    return allPublished;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const firstQuestion = questions[0];
    const firstType = firstQuestion.type;
    const sameOnly = questions.filter(
        (question: Question): boolean => question.type === firstType,
    );
    if (sameOnly.length === questions.length) {
        return true;
    }
    return false;
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
    type: QuestionType,
): Question[] {
    const questionsCopied = questions.map(
        (question: Question): Question => question,
    );
    const blankQuestion = makeBlankQuestion(id, name, type);
    return [...questionsCopied, blankQuestion];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    const questionsRenamed = questions.map(
        (question: Question): Question =>
            question.id === targetId ?
                { ...question, name: newName }
            :   question,
    );
    return questionsRenamed;
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
    newQuestionType: QuestionType,
): Question[] {
    const questionsRenamed = questions.map(
        (question: Question): Question =>
            question.id === targetId ?
                { ...question, type: newQuestionType }
            :   question,
    );
    const checkType = questionsRenamed.map(
        (question: Question): Question =>
            (
                question.id === targetId &&
                question.type !== "multiple_choice_question"
            ) ?
                { ...question, options: [] }
            :   question,
    );
    return checkType;
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
    newOption: string,
): Question[] {
    const newQuestions = questions.map((question: Question): Question => {
        if (question.id !== targetId) {
            return question;
        }
        let newOptions: string[];
        if (targetOptionIndex === -1) {
            newOptions = [...question.options, newOption];
        } else {
            newOptions = question.options.map((option, index) =>
                index === targetOptionIndex ? newOption : option,
            );
        }

        return { ...question, options: newOptions };
    });
    return newQuestions;
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
    newId: number,
): Question[] {
    const questionsWithDuplicate = questions.reduce(
        (newQuestions: Question[], question: Question) => {
            newQuestions.push(question);
            if (question.id === targetId) {
                const duplicate = duplicateQuestion(newId, question);
                newQuestions.push(duplicate);
            }
            return newQuestions;
        },
        [],
    );
    return questionsWithDuplicate;
}
