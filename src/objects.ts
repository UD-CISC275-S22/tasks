/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 */
export function isCorrect(question: Question, answer: string): boolean {
    const expected = question.expected.trim().toLowerCase();
    const given = answer.trim().toLowerCase();
    return given === expected;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct).
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") {
        return true;
    }

    
    if (question.type === "multiple_choice_question") {
        return question.options.includes(answer);
    }

    return false;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`.
 */
export function toShortForm(question: Question): string {
    // spec says ": " (colon + space)
    return question.id.toString() + ": " + question.name.slice(0, 10);
}

/**
 * Consumes a question and returns a formatted string representation.
 */
export function toMarkdown(question: Question): string {
    let result = "# " + question.name + "\n" + question.body;

    if (question.type === "multiple_choice_question") {
        for (let i = 0; i < question.options.length; i++) {
            // needs "- " (dash + space)
            result = result + "\n- " + question.options[i];
        }
    }

    return result;
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return {
        id: question.id,
        name: newName,
        type: question.type,
        body: question.body,
        expected: question.expected,
        options: question.options,
        points: question.points,
        published: question.published
    };
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted.
 */
export function publishQuestion(question: Question): Question {
    return {
        id: question.id,
        name: question.name,
        type: question.type,
        body: question.body,
        expected: question.expected,
        options: question.options,
        points: question.points,
        published: !question.published
    };
}

/**
 * Create a new question based on the old question...
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        id: id,
        name: "Copy of " + oldQuestion.name,
        type: oldQuestion.type,
        body: oldQuestion.body,
        expected: oldQuestion.expected,
        options: oldQuestion.options,
        points: oldQuestion.points,
        published: false
    };
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`.
 */
export function addOption(question: Question, newOption: string): Question {
    return {
        id: question.id,
        name: question.name,
        type: question.type,
        body: question.body,
        expected: question.expected,
        options: question.options.concat(newOption),
        points: question.points,
        published: question.published
    };
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    return {
        id: id,
        name: name,
        type: contentQuestion.type,
        body: contentQuestion.body,
        expected: contentQuestion.expected,
        options: contentQuestion.options,
        points: points,
        published: false
    };
}
