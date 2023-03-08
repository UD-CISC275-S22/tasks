/* eslint-disable @typescript-eslint/no-inferrable-types */
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
    const blankQ: Question = {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        points: 1,
        published: false,
        options: []
    };
    return blankQ;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    const copyQ: Question = { ...question };
    const copyA: string = answer;
    const ignoreCaseAns: string = copyA.toLowerCase(); //lowercase answer
    const ignoreCaseQ: string = copyQ.expected.toLowerCase(); // lowercase expected attribute
    if (ignoreCaseAns.trim() === ignoreCaseQ.trim()) {
        return true;
    }
    return false;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    const copyQ: Question = { ...question };
    const copyA: string = answer;
    if (copyQ.type === "short_answer_question") {
        return true;
    } else if (copyQ.options.includes(copyA)) {
        return true;
    }
    return false;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    const newQ: Question = question;
    const id: number = newQ.id;
    const name: string = newQ.name.slice(0, 10);
    const shortForm: string = `${id}: ${name}`;
    return shortForm;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    const copyQ: Question = { ...question };
    const line1: string = `# ${copyQ.name}`;
    const line2: string = `${copyQ.body}`;
    if (copyQ.type === "multiple_choice_question") {
        const options: string[] = copyQ.options.map(
            (str: string): string => `- ${str}` //maps each option to be formatted
        );
        const markedDown: string[] = [line1, line2, ...options];
        const fin: string = markedDown.join("\n");
        return fin;
    }
    const shortAns: string[] = [line1, line2]; //for non multiple choice qs
    const fin: string = shortAns.join("\n");
    return fin;
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    const renamed: Question = { ...question };
    renamed.name = newName;
    return renamed;
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    //console.log(question.published);
    //const newQ: Question = question;
    //newQ.published = !newQ.published;
    //console.log(question.published);
    return { ...question, published: !question.published };
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    const copyQ: Question = { ...oldQuestion };
    const oldName: string = copyQ.name;
    const newName: string = `Copy of ${oldName}`;
    return { ...copyQ, name: newName, published: false, id: id };
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    const newQ: Question = { ...question };
    const newOps: string[] = newQ.options;
    newOps.push(newOption);
    return { ...newQ, options: newOps };
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    return { ...contentQuestion, id, name, points, published: false };
}
