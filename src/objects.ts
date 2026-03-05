import { Question, QuestionType } from "./interfaces/question";

/* 
/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
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
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    return (
        answer.trim().toLowerCase() === question.expected.trim().toLowerCase()
    );
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "multiple_choice_question") {
        return question.options.includes(answer);
    }
    return true;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and the `name`. The two strings should be separated by ": ".
 */
export function toShortForm(question: Question): string {
    const shortName = question.name.substring(0, 10);
    return `${question.id}: ${shortName}`;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 */
export function toMarkdown(question: Question): string {
    const firstLines = `# ${question.name}\n${question.body}`;
    if (question.type === "multiple_choice_question") {
        const optionsList = question.options
            .map((opt: string): string => `- ${opt}`)
            .join("\n");
        return `${firstLines}\n${optionsList}`;
    }
    return firstLines;
}

/**
 * Return a new version of the given question, except the name should now be `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return { ...question, name: newName };
}

/**
 * Return a new version of the given question, except the `published` field should be inverted.
 */
export function publishQuestion(question: Question): Question {
    return { ...question, published: !question.published };
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME". The `published` field should be reset to false.
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
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`.
 */
export function addOption(question: Question, newOption: string): Question {
    return {
        ...question,
        options: [...question.options, newOption],
    };
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number },
): Question {
    return {
        ...contentQuestion,
        id: id,
        name: name,
        points: points,
        published: false,
    };
}
