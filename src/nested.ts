import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const filtereddcQuestions = dcQuestions.filter(
        (question: Question): boolean => question.published
    );

    return filtereddcQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const filtereddcQuestions = dcQuestions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            (question.expected !== "" && question.options !== [])
    );
    if (filtereddcQuestions.length === 0) {
        return [];
    } else {
        return filtereddcQuestions;
    }
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const found = dcQuestions.find(
        (question: Question): boolean => question.id === id
    );
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
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const found = dcQuestions.find(
        (question: Question): boolean => question.id === id
    );
    if (!found) {
        return dcQuestions;
    } else {
        const filtereddcQuestions = dcQuestions.filter(
            (question: Question): boolean => question.id !== id
        );
        return filtereddcQuestions;
    }
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const nameArray = dcQuestions.map(
        (question: Question): string => question.name
    );
    return nameArray;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const sum = dcQuestions.reduce(
        (currentTotal: number, num: Question) => currentTotal + num.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const published = getPublishedQuestions(dcQuestions);
    const sum = published.reduce(
        (currentTotal: number, num: Question) => currentTotal + num.points,
        0
    );
    return sum;
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
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const sum = dcQuestions.reduce(
        (currentTotal: string, num: Question) =>
            currentTotal +
            ("\n" +
                num.id +
                "," +
                num.name +
                "," +
                num.options.length +
                "," +
                num.points +
                "," +
                num.published),
        "id,name,options,points,published"
    );
    return sum;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const answerArray = dcQuestions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answerArray;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const published = dcQuestions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return published;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const typeTest = dcQuestions[0];
    const test = dcQuestions.every(
        (question: Question): boolean => typeTest.type === question.type
    );
    return test;
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
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const blankQ = makeBlankQuestion(id, name, type);
    dcQuestions.splice(dcQuestions.length, 0, blankQ);
    return dcQuestions;
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
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const filtered = dcQuestions.map(
        (question: Question): Question =>
            question.id === targetId
                ? { ...question, name: newName }
                : { ...question }
    );
    return filtered;
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
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const found = dcQuestions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    if (
        newQuestionType !== "multiple_choice_question" &&
        dcQuestions[found].type === "multiple_choice_question"
    ) {
        const filtered = dcQuestions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? { ...question, type: newQuestionType, options: [] }
                    : { ...question }
        );
        return filtered;
    } else {
        const filtered = dcQuestions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? { ...question, type: newQuestionType }
                    : { ...question }
        );
        return filtered;
    }
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

export function editOptionHelper(
    question: Question,
    targetId: number,
    idx: number,
    newOption: string
): Question {
    let arr;
    /*if (id === -1) {
        arr.splice(arr.length, 0, newOption);
    } else {*/
    if (question.id === targetId) {
        arr = { ...question, options: [...question.options] };
        arr.options.splice(idx, 1, newOption);
    } else {
        arr = { ...question };
    }
    // }
    return arr;
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    let optionAdded;
    if (targetOptionIndex === -1) {
        optionAdded = dcQuestions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? {
                          ...question,
                          options: [...question.options, newOption]
                      }
                    : { ...question }
        );
    } else {
        optionAdded = dcQuestions.map(
            (question: Question): Question =>
                editOptionHelper(
                    question,
                    targetId,
                    targetOptionIndex,
                    newOption
                )
        );
    }
    return optionAdded;
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
    const dcQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const found = dcQuestions.findIndex(
        (question: Question): boolean => question.id === targetId
    );

    const dQ = duplicateQuestion(newId, dcQuestions[found]);
    dcQuestions.splice(found + 1, 0, dQ);
    return dcQuestions;
}
