/* eslint-disable prettier/prettier */
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const ret = questions.filter(
        (s: Question): boolean => s.published === true
    );
    return ret;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const ret = questions.filter(
        (s: Question): boolean =>
            s.body.length > 0 || s.expected.length > 0 || s.options.length > 0
    );
    return ret;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const ids = questions.map((q: Question): number => q.id);
    const ind = ids.indexOf(id);
    if (ind != -1) {
        return questions[ind];
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const ret = questions.filter((s: Question): boolean => s.id != id);
    return ret;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const ret = questions.map((q: Question): string => q.name);
    return ret;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const nums = questions.map((q: Question): number => q.points);
    const sum = nums.reduce((n: number, num: number) => n + num, 0);
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const pub = questions.filter((s: Question): boolean => s.published);
    const nums = pub.map((q: Question): number => q.points);
    const sum = nums.reduce((n: number, num: number) => n + num, 0);
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
    let ret = "id,name,options,points,published\n";
    questions.map(
        (e) =>
            (ret =
                "" +
                ret +
                e.id.toString() +
                "," +
                e.name +
                "," +
                e.options.length +
                "," +
                e.points +
                "," +
                e.published +
                "\n")
    );
    ret = ret.substring(0, ret.length - 1);
    return ret;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ret: Answer[] = questions.map((q) => ({
        questionId: q.id,
        text: "",
        submitted: false,
        correct: false
    }));
    return ret;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const ret = questions.map((q) => ({
        ...q,
        published: true
    }));
    return ret;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
const typ = questions.every((q:Question): boolean => q.type === questions[1].type);
    return typ;
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
    const ret = questions.map((q) => ({
        ...q
    }));
    ret.push(makeBlankQuestion(id, name, type));
    return ret;
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
    const ret = questions.map((q) =>
        q.id === targetId
            ? {
                ...q,
                name: newName
            }
            : q
    );
    return ret;
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
    if (newQuestionType == "short_answer_question") {
        const ret = questions.map((q) =>
            q.id === targetId
                ? {
                    ...q,
                    type: newQuestionType,
                    options: []
                }
                : q
        );
        return ret;
    } else {
        const ret = questions.map((q) =>
            q.id === targetId
                ? {
                    ...q,
                    type: newQuestionType
                }
                : q
        );
        return ret;
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
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    let newArr: Question[] = [];
    if (targetOptionIndex != -1) {
        newArr = questions.map((q: Question): Question => {
            if (q.id === targetId) {
                const newQ = { ...q, options: [...q.options] };
                newQ.options.splice(targetOptionIndex, 1, newOption);
                return newQ;
            } else {
                return q;
            }
        });
    } else {
        newArr = questions.map((q: Question): Question => {
            if (q.id === targetId) {
                const newQ = { ...q, options: [...q.options] };
                newQ.options.splice(q.options.length, 1, newOption);
                return newQ;
            } else {
                return q;
            }
        });
    }
    return newArr;
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
    const ids = questions.map((q: Question): number => q.id);
    const ind = ids.indexOf(targetId);
    const ret = questions.map((q) =>
        q.options.length === 0
            ? {
                ...q
            }
            : q
    );
    ret.splice(ind + 1, 0, duplicateQuestion(newId, questions[ind]));
    return ret;
}
