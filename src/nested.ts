import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
<<<<<<< HEAD
import { makeBlankQuestion, duplicateQuestion } from "./objects";
=======
>>>>>>> upstream/task-state

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
<<<<<<< HEAD
    return questions.filter(
        (question: Question): boolean => question.published,
    );
=======
    return [];
>>>>>>> upstream/task-state
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
<<<<<<< HEAD
    return questions.filter(
        (q: Question): boolean =>
            q.body !== "" || q.expected !== "" || q.options.length !== 0,
    );
=======
    return [];
>>>>>>> upstream/task-state
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
<<<<<<< HEAD
    id: number,
): Question | null {
    return questions.find((q: Question): boolean => q.id === id) || null;
=======
    id: number
): Question | null {
    return null;
>>>>>>> upstream/task-state
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
<<<<<<< HEAD
    return questions.filter((q: Question): boolean => q.id !== id);
=======
    return [];
>>>>>>> upstream/task-state
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
<<<<<<< HEAD
    return questions.map((q: Question): string => q.name);
=======
    return [];
>>>>>>> upstream/task-state
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
<<<<<<< HEAD
    return questions.reduce(
        (total: number, q: Question) => total + q.points,
        0,
    );
=======
    return 0;
>>>>>>> upstream/task-state
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
<<<<<<< HEAD
    return questions
        .filter((q: Question) => q.published)
        .reduce((total: number, q: Question) => total + q.points, 0);
=======
    return 0;
>>>>>>> upstream/task-state
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
<<<<<<< HEAD
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published";
    const rows = questions.map(
        (q: Question) =>
            `${q.id},${q.name},${q.options.length},${q.points},${q.published}`,
    );
    return [header, ...rows].join("\n");
=======
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
    return "";
>>>>>>> upstream/task-state
}

/**
 * Consumes an array of Questions and produces a corresponding array of
<<<<<<< HEAD
 * Answers.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
=======
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return [];
>>>>>>> upstream/task-state
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
<<<<<<< HEAD
    return questions.map(
        (q: Question): Question => ({ ...q, published: true }),
    );
=======
    return [];
>>>>>>> upstream/task-state
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
<<<<<<< HEAD
 * are the same type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) return true;
    const firstType = questions[0].type;
    return questions.every((q: Question) => q.type === firstType);
=======
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    return false;
>>>>>>> upstream/task-state
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
<<<<<<< HEAD
 * except that a blank question has been added onto the end.
=======
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
>>>>>>> upstream/task-state
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
<<<<<<< HEAD
    type: QuestionType,
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
=======
    type: QuestionType
): Question[] {
    return [];
>>>>>>> upstream/task-state
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
<<<<<<< HEAD
 * the Questions are the same EXCEPT for the one with the given `targetId`.
=======
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
>>>>>>> upstream/task-state
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
<<<<<<< HEAD
    newName: string,
): Question[] {
    return questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, name: newName } : q,
    );
=======
    newName: string
): Question[] {
    return [];
>>>>>>> upstream/task-state
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
<<<<<<< HEAD
 * the Questions are the same EXCEPT for the one with the given `targetId`.
=======
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
>>>>>>> upstream/task-state
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
<<<<<<< HEAD
    newQuestionType: QuestionType,
): Question[] {
    return questions.map((q: Question): Question => {
        if (q.id === targetId) {
            const updatedOptions =
                newQuestionType !== "multiple_choice_question" ? [] : q.options;
            return { ...q, type: newQuestionType, options: updatedOptions };
        }
        return q;
    });
=======
    newQuestionType: QuestionType
): Question[] {
    return [];
>>>>>>> upstream/task-state
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
<<<<<<< HEAD
 * the Questions are the same EXCEPT for the one with the given `targetId`.
=======
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
>>>>>>> upstream/task-state
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
<<<<<<< HEAD
    newOption: string,
): Question[] {
    return questions.map((q: Question): Question => {
        if (q.id === targetId) {
            const newOptions = [...q.options];
            if (targetOptionIndex === -1) {
                newOptions.push(newOption);
            } else {
                newOptions[targetOptionIndex] = newOption;
            }
            return { ...q, options: newOptions };
        }
        return q;
    });
=======
    newOption: string
) {
    return [];
>>>>>>> upstream/task-state
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
<<<<<<< HEAD
=======
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
>>>>>>> upstream/task-state
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
<<<<<<< HEAD
    newId: number,
): Question[] {
    const index = questions.findIndex((q: Question) => q.id === targetId);
    if (index === -1) return [...questions];

    const duplicate = duplicateQuestion(newId, questions[index]);
    const newArray = [...questions];
    newArray.splice(index + 1, 0, duplicate);
    return newArray;
}
=======
    newId: number
): Question[] {
    return [];
}
>>>>>>> upstream/task-state
