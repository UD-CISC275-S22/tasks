import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type`.
 * The `body` and `expected` should be empty strings, the `options` should be an empty list,
 * the `points` should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType,
): Question {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false,
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. Ignores capitalization and whitespace.
 */
export function isCorrect(question: Question, answer: string): boolean {
    return (
        answer.trim().toLowerCase() === question.expected.trim().toLowerCase()
    );
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid. For multiple choice, must be one of the options.
 * For short answer, any answer is valid.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "multiple_choice_question") {
        return question.options.includes(answer);
    }
    return true;
}

/**
 * Produces a string combining the question id and the first 10 characters of the name.
 */
export function toShortForm(question: Question): string {
    const shortName = question.name.substring(0, 10);
    return `${question.id}: ${shortName}`;
}

/**
 * Produces a markdown string of the question.
 * - First line: `# name`
 * - Second line: `body`
 * - If multiple choice, list options with `- ` prefix
 */
export function toMarkdown(question: Question): string {
    const firstLines = `# ${question.name}\n${question.body}`;
    if (question.type === "multiple_choice_question") {
        const optionsList = question.options
            .map((opt) => `- ${opt}`)
            .join("\n");
        return `${firstLines}\n${optionsList}`;
    }
    return firstLines;
}

/**
 * Return a new version of the question with `name` changed.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return { ...question, name: newName };
}

/**
 * Return a new version of the question with `published` inverted.
 */
export function publishQuestion(question: Question): Question {
    return { ...question, published: !question.published };
}

/**
 * Return a new question duplicating an old one.
 * Name is prefixed with "Copy of", published is reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        ...oldQuestion,
        id: id,
        name: `Copy of ${oldQuestion.name}`,
        published: false,
    };
}

/**
 * Return a new version of the question with a new option added.
 * Creates a new array for options.
 */
export function addOption(question: Question, newOption: string): Question {
    return {
        ...question,
        options: [...question.options, newOption],
    };
}

/**
 * Merge two questions into a new one:
 * - `id` and `name` come from arguments
 * - `body`, `type`, `options`, `expected` come from `contentQuestion`
 * - `points` come from second question
 * - `published` is false
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number },
): Question {
    return {
        id: id,
        name: name,
        body: contentQuestion.body,
        type: contentQuestion.type,
        options: [...contentQuestion.options],
        expected: contentQuestion.expected,
        points: points,
        published: false,
    };
}
