import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type.
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
 * the `answer` is correct.
 */
export function isCorrect(question: Question, answer: string): boolean {
    return (
        answer.trim().toLowerCase() === question.expected.trim().toLowerCase()
    );
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "multiple_choice_question") {
        return question.options.includes(answer);
    }
    return true;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`.
 */
export function toShortForm(question: Question): string {
    const shortName = question.name.substring(0, 10);
    return `${question.id}: ${shortName}`;
}

/**
 * Consumes a question and returns a formatted string representation as markdown.
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
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return { ...question, name: newName };
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted.
 */
export function publishQuestion(question: Question): Question {
    return { ...question, published: !question.published };
}

/**
 * Create a new question based on the old question with name "Copy of...".
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
 * Return a new version of the given question, with the `newOption` added.
 */
export function addOption(question: Question, newOption: string): Question {
    return {
        ...question,
        options: [...question.options, newOption],
    };
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
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
