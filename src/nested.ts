import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question: Question): boolean => question.published,
    );
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (q: Question): boolean =>
            q.body !== "" || q.expected !== "" || q.options.length !== 0,
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    return questions.find((q: Question): boolean => q.id === id) || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((q: Question): boolean => q.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((q: Question): string => q.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (total: number, q: Question) => total + q.points,
        0,
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions
        .filter((q: Question) => q.published)
        .reduce((total: number, q: Question) => total + q.points, 0);
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published";
    const rows = questions.map(
        (q: Question) =>
            `${q.id},${q.name},${q.options.length},${q.points},${q.published}`,
    );
    return [header, ...rows].join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
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
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (q: Question): Question => ({ ...q, published: true }),
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) return true;
    const firstType = questions[0].type;
    return questions.every((q: Question) => q.type === firstType);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, name: newName } : q,
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
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
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
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
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    const index = questions.findIndex((q: Question) => q.id === targetId);
    if (index === -1) return [...questions];

    const duplicate = duplicateQuestion(newId, questions[index]);
    const newArray = [...questions];
    newArray.splice(index + 1, 0, duplicate);
    return newArray;
}
