/* eslint-disable prettier/prettier */
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (questions: Question): boolean => questions.published
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (question: Question): boolean =>
            !(
                question.body === "" &&
                question.expected === "" &&
                question.options.length === 0
            )
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const findId = questions.find(
        (question: Question): boolean => question.id === id
    );
    if (!findId) {
        return null;
    } else if (findId) {
        return findId;
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const noId = questions.filter(
        (questions: Question): boolean => questions.id !== id
    );
    return noId;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const onlyNames = questions.map(
        (question: Question): string => question.name
    );
    return onlyNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sumPoints = questions.reduce(
        (num: number, question: Question) => num + question.points,
        0
    );
    return sumPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const onlyPublished = questions.filter(
        (question: Question): boolean => question.published
    );
    const sumPoints = onlyPublished.reduce(
        (num: number, question: Question) => num + question.points,
        0
    );
    return sumPoints;
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
    const csv = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    const fullcsv = "id,name,options,points,published\n" + csv;
    return fullcsv;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    interface Answers {
        questionId: number;
        text: string;
        submitted: boolean;
        correct: boolean;
    }
    const allAnswers: Answers[] = questions.map(
        (question: Question): Answers => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return allAnswers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const alwaysPublished = questions.map(
        // The parentheses around the curly braces are CRITICAL!
        (questions: Question): Question => ({
            ...questions,
            published: true
        })
    );
    return alwaysPublished;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const mType = questions.filter(
        // The parentheses around the curly braces are CRITICAL!
        (questions: Question): boolean =>
            questions.type === "multiple_choice_question"
    );
    const sType = questions.filter(
        // The parentheses around the curly braces are CRITICAL!
        (questions: Question): boolean =>
            questions.type === "short_answer_question"
    );
    if (
        mType.length === questions.length ||
        sType.length === questions.length
    ) {
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
    type: QuestionType
): Question[] {
    const question = [
        ...questions,
        {
            id: id,
            name,
            type,
            body: "",
            expected: "",
            options: [],
            points: 1,
            published: false
        }
    ];

    return question;
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
    const changeName = questions.map(
        (question: Question): Question => ({
            ...question,
            name: question.id === targetId ? newName : question.name
        })
    );
    return changeName;
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
    const changeName = questions.map(
        (question: Question): Question => ({
            ...question,
            type: question.id === targetId ? newQuestionType : question.type
        })
    );
    const changeName2 = changeName.map(
        (question: Question): Question => ({
            ...question,
            options:
                question.type === "short_answer_question" &&
                question.type === newQuestionType
                    ? []
                    : question.options
        })
    );
    return changeName2;
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
function helpEditOptions(
    options: string[],
    targetOptionIndex: number,
    newOption: string
) {
    const change = [...options];
    const isOption = targetOptionIndex === -1;
    if (isOption) {
        change.splice(options.length, 0, newOption);
    } else {
        change.splice(targetOptionIndex, 1, newOption);
    }
    return change;
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    const optionsChange = questions.map(
        (question: Question): Question => ({
            ...question,
            options:
                question.id === targetId
                    ? helpEditOptions(question.options, targetOptionIndex, newOption)
                    : question.options
        })
    );
    return optionsChange;
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
    const newDup = [...questions];
    const findIndex: number = newDup.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    newDup.splice(findIndex + 1, 0, {
        ...newDup[findIndex],
        id: newId,
        name: "Copy of " + newDup[findIndex].name
    });
    return newDup;
}
