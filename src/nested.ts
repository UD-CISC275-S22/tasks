/* eslint-disable indent */
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const copy = [...questions];
    const published = copy.filter(
        (question: Question): boolean => question.published
    );
    return published;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const copy = [...questions];
    const nonempty = copy.filter(
        (question: Question): boolean =>
            question.body !== "" &&
            question.expected !== "" &&
            question.options !== null
    );
    //console.log(empty);
    return nonempty;
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
    const question = copy.find((q: Question): boolean => q.id === id);
    return question !== undefined ? question : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const copy = [...questions];
    const question = copy.filter((q: Question): boolean => q.id !== id);
    return question;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const copy = [...questions];
    const question = copy.map((q: Question): string => q.name);
    return question;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const copy = [...questions];
    const reduce = copy.reduce(
        (total: number, q: Question): number => q.points + total,
        0
    );
    return reduce;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const copy = [...questions];
    const publish = copy.filter((q: Question): boolean => q.published === true);
    const reduce = publish.reduce(
        (total: number, q: Question): number => total + q.points,
        0
    );
    return reduce;
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
    const headers = "id,name,options,points,published\n";
    const answer = copy
        .map(
            (q: Question): string =>
                `${q.id},${q.name},${q.options ? q.options.length : 0},${
                    q.points
                },${q.published}`
        )
        .join("\n");
    return headers + answer;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const copy = [...questions];
    const map = copy.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return map;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const copy = [...questions];
    const map = copy.map(
        (q: Question): Question => ({ ...q, published: true })
    );

    return map;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const copy = [...questions];
    const type1 = copy[0].type;
    const every = copy.every((q: Question): boolean => q.type === type1);
    return every;
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
    const copy = [...questions, makeBlankQuestion(id, name, type)];
    return copy;
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
    const copy = [...questions];
    const find = copy.map(
        (q: Question): Question =>
            targetId === q.id ? { ...q, name: newName } : q
    );
    return find;
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
    const copy = [...questions];
    const find = copy.map((q: Question): Question => {
        if (targetId === q.id) {
            const options =
                newQuestionType !== "multiple_choice_question" ? [] : q.options;
            return { ...q, type: newQuestionType, options };
        } else {
            return q;
        }
    });
    return find;
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
    const copy = [...questions];
    const map = copy.map((q: Question): Question => {
        if (targetId === q.id) {
            const options =
                targetOptionIndex === -1
                    ? [...q.options, newOption]
                    : q.options.map((option: string, index: number) =>
                          index === targetOptionIndex ? newOption : option
                      );
            return { ...q, options };
        } else {
            return q;
        }
    });
    return map;
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
    return [];
}
