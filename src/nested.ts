import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const fil = questions.filter((q: Question): boolean => q.published == true);
    return fil;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const ar = questions.filter(
        (q: Question): boolean =>
            q.body.length > 0 || q.expected.length > 0 || q.options.length > 0
    );
    return ar;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const fil = questions.filter((q: Question): boolean => q.id == id);
    if (fil.length > 0) {
        return fil[0];
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const fil = questions.filter((q: Question): boolean => q.id !== id);
    return fil;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const m = questions.map((q: Question): string => q.name);
    return m;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const s = questions.reduce(
        (cur: number, q: Question): number => cur + q.points,
        0
    );
    return s;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const fil = questions.filter((q: Question): boolean => q.published == true);
    const s = fil.reduce(
        (sum: number, q: Question): number => sum + q.points,
        0
    );
    return s;
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
    const s = "id,name,options,points,published\n";
    const str = questions.reduce(
        (l: string, q: Question): string =>
            l +
            q.id.toString() +
            "," +
            q.name +
            "," +
            q.options.length.toString() +
            "," +
            q.points.toString() +
            "," +
            q.published +
            "\n",
        s
    );
    return str.trim();
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let i = 0;
    const ans: Answer[] = [];
    for (i = 0; i < questions.length; i++) {
        ans.push({
            questionId: questions[i].id,
            text: "",
            submitted: false,
            correct: false
        });
    }
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const n = questions.map(
        (q: Question): Question => ({ ...q, published: true })
    );
    return n;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const ty = questions.length > 0 ? questions[0].type : "";
    const f = questions.filter((q: Question): boolean => q.type === ty);
    if (f.length === questions.length) {
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
    const ar = [...questions, makeBlankQuestion(id, name, type)];
    return ar;
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
    const m = questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, name: newName } : q
    );
    return m;
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
    const m = questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, type: newQuestionType } : q
    );
    const m1 = m.map(
        (q: Question): Question =>
            q.type !== "multiple_choice_question" ? { ...q, options: [] } : q
    );
    return m1;
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
export function handler(q: Question, idx: number, newOption: string): Question {
    let tmp: string[];
    //console.log("question options.length before adding  "+ q.options.length);
    if (idx === -1) {
        const ar = [...q.options, newOption];
        tmp = [...ar];
    } else {
        console.log("options are " + q.options);
        const ar = [...q.options];
        ar[idx] = newOption;
        tmp = [...ar];
    }
    const s: Question = { ...q, options: tmp };
    //console.log("question options.length after adding  "+ s.options.length);
    return s;
}
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const m = questions.map(
        (q: Question): Question =>
            q.id === targetId ? handler(q, targetOptionIndex, newOption) : q
    );
    return m;
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
    const id_Array = questions.map((q: Question): number => q.id);
    const idx = id_Array.indexOf(targetId);
    const dQ = duplicateQuestion(newId, questions[idx]);
    const retA = [...questions];
    retA.splice(idx + 1, 0, dQ);
    return retA;
}
