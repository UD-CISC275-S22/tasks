import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const published_questions = questions.filter((q) => q.published === true);
    return published_questions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const ne_questions = questions.filter(
        (q) => q.body !== "" || q.expected !== "" || q.options.length !== 0
    );
    return ne_questions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const found = questions.find((q) => q.id === id);
    return found === undefined ? null : found;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const no_id_q = questions.filter((q) => q.id !== id);
    return no_id_q;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const name_arr = questions.map((q) => q.name);
    return name_arr;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const pts = questions.reduce((p, q) => p + q.points, 0);
    return pts;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const pub_q = questions.filter((q) => q.published === true);
    const pub_pts = pub_q.reduce((p, q) => p + q.points, 0);
    return pub_pts;
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
    const first_line = "id,name,options,points,published\n";
    const q_table = questions.reduce(
        (t, q) =>
            t +
            q.id.toString() +
            "," +
            q.name +
            "," +
            q.options.length +
            "," +
            q.points.toString() +
            "," +
            q.published.toString() +
            "\n",
        ""
    );
    return (first_line + q_table).trim();
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ans_array = questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return ans_array;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const pub_arr = questions.map((q) => ({ ...q, published: true }));
    return pub_arr;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const base_type = questions[0].type;
    const is_same_type = questions.every((q) => q.type === base_type);
    return is_same_type;
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
    return [...questions, makeBlankQuestion(id, name, type)];
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
    const rename_q = JSON.parse(JSON.stringify(questions));
    const ind = rename_q.findIndex((q: Question) => q.id === targetId);
    if (ind === -1) {
        return rename_q;
    } else {
        rename_q[ind].name = newName;
    }
    return rename_q;
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
    const type_change = JSON.parse(JSON.stringify(questions));
    const ind = type_change.findIndex((q: Question) => q.id === targetId);
    if (ind === -1) {
        return type_change;
    } else {
        type_change[ind].type = newQuestionType;
    }
    if (newQuestionType !== "multiple_choice_question") {
        type_change[ind].options = [];
    }
    return type_change;
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
    const opt_change = JSON.parse(JSON.stringify(questions));
    const q_ind = opt_change.findIndex((q: Question) => q.id === targetId);
    if (q_ind === -1) {
        return opt_change;
    } else {
        if (targetOptionIndex === -1) {
            opt_change[q_ind].options = [
                ...opt_change[q_ind].options,
                newOption
            ];
        } else {
            opt_change[q_ind].options.splice(targetOptionIndex, 1, newOption);
        }
    }
    return opt_change;
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
    const ind = questions.findIndex((q) => q.id === targetId);
    if (ind === -1) {
        return questions;
    }
    const dup = duplicateQuestion(newId, questions[ind]);
    const new_arr = JSON.parse(JSON.stringify(questions));
    new_arr.splice(ind + 1, 0, dup);
    return new_arr;
}
