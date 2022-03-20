//import { moveEmitHelpers } from "typescript";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";
//import { findQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const isPublished = questions.filter(
        (questions: Question): boolean => questions.published
    );
    return isPublished;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const isEmpty = questions.filter(
        (questions: Question): boolean =>
            questions.body !== "" ||
            questions.expected !== "" ||
            questions.options.length !== 0
    );
    return isEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const givenId = questions.find(
        (questions: Question): boolean => questions.id === id
    );
    if (typeof givenId === "undefined") {
        return null;
    } else {
        return givenId;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const notId = questions.filter(
        (questions: Question): boolean => questions.id !== id
    );
    return notId;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map(
        (questions: Question): string => questions.name
    );
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoints = questions.reduce(
        (currentSum: number, questions: Question): number =>
            currentSum + questions.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return sumPoints(getPublishedQuestions(questions));
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
    const questionCSV =
        "id,name,options,points,published\n" +
        questions
            .map(
                (questions: Question): string =>
                    `${questions.id},${questions.name},${questions.options.length},${questions.points},${questions.published}`
            )
            .join("\n");
    return questionCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const newAnswers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return newAnswers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publishAll = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return publishAll;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const length = questions.length;
    const sameType = questions.filter(
        (questions: Question): boolean =>
            questions.type === "short_answer_question"
    );
    if (length === sameType.length) {
        return true;
    } else if (sameType.length === 0) {
        return true;
    } else {
        return false;
    }
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
    const newQuestion = makeBlankQuestion(id, name, type);
    const newQuestions = [...questions, newQuestion];
    return newQuestions;
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
    const newQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const target = findQuestion(newQuestions, targetId);

    const targetIndex: number = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    if (target != null) {
        const targetCopy = { ...target, name: newName };
        newQuestions.splice(targetIndex, 1, targetCopy);
    }
    return newQuestions;
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
    const newQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const targetIndex: number = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const target = findQuestion(newQuestions, targetId);

    if (target != null) {
        const targetCopy = { ...target };
        if (newQuestionType === "multiple_choice_question") {
            targetCopy.type = newQuestionType;
            newQuestions.splice(targetIndex, 1, targetCopy);
        } else {
            targetCopy.type = newQuestionType;
            targetCopy.options = [];
            newQuestions.splice(targetIndex, 1, targetCopy);
        }
    }
    /**const newQuestions = questions.map(
        (question: Question): Question =>
            targetId === question.id
                ? question.id = targetId && question.type = newQuestionType 
                : question
    );*/
    return newQuestions;
}
export function editOptionArray(
    question: Question,
    targetOptionIndex: number,
    newOption: string
): Question {
    const optionCopy = [...question.options];
    if (targetOptionIndex === -1) {
        return { ...question, options: [...question.options, newOption] };
    } else {
        optionCopy.splice(targetOptionIndex, 1, newOption);
    }
    const targetCopy = { ...question, options: optionCopy };
    return targetCopy;
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
    const newQuestions = questions.map(
        (question: Question): Question =>
            targetId === question.id
                ? editOptionArray(question, targetOptionIndex, newOption)
                : question
    );
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
    newId: number
): Question[] {
    /**const newQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const targetIndex: number = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const target = findQuestion(newQuestions, targetId);

    if (target != null) {
        const duplicate = duplicateQuestion(newId, target);
        newQuestions.splice(targetIndex, 0, duplicate);
    }*/
    console.log(questions);
    let duplicate;
    const targetIndex: number = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const newQuestions = questions.map(
        (question: Question): Question =>
            targetId === question.id
                ? (duplicate = duplicateQuestion(newId, question)) && question
                : question
    );
    if (duplicate != undefined) {
        newQuestions.splice(targetIndex + 1, 0, duplicate);
    }
    console.log(newQuestions);
    return newQuestions;
}
