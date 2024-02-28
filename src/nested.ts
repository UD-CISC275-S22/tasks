import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const ans: Question[] = [];
    questions.map((q: Question) => {
        if (q.published === true) {
            ans.push(q);
        }
    });
    return ans;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const ans: Question[] = [];
    questions.map((q: Question) => {
        if (
            !(q.body === "") ||
            !(q.expected === "") ||
            !(q.options.length === 0)
        ) {
            ans.push(q);
        }
    });
    return ans;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const ans = questions.find((q: Question) => q.id === id);
    return ans || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const question: Question[] = [];
    questions.map((q: Question) => {
        if (!(q.id === id)) {
            question.push(q);
        }
    });
    return question;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const ans: string[] = [];
    questions.map((q: Question) => {
        ans.push(q.name);
    });
    return ans;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let total = 0;
    questions.map((q: Question) => {
        total += q.points;
    });
    return total;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let total = 0;
    questions.map((q: Question) => {
        if (q.published) total += q.points;
    });
    return total;
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
    const header = "id,name,options,points,published";
    const lines = questions.map((question) => {
        const optionsCount = question.options.length;
        const line = [
            question.id,
            `${question.name}`,
            optionsCount,
            question.points,
            question.published
        ].join(",");
        return line;
    });
    const csv = [header, ...lines].join("\n");
    return csv;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const ans = [...questions];
    ans.map((q: Question) => {
        if (!q.published) {
            q.published = true;
        }
    });
    return ans;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const copy = [...questions];
    if (copy.length === 0) {
        return true;
    }
    const firstQuestionType = questions[0].type;

    let bool = true;

    copy.map((q: Question) => {
        if (q.type !== firstQuestionType) {
            bool = false;
        }
    });

    return bool;
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
    const ans: Question[] = [...questions];
    ans.push(makeBlankQuestion(id, name, type));
    return ans;
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
    const copyQuestions = [...questions];
    const removedQuestions = copyQuestions.map((question) => {
        if (question.id === targetId) {
            return { ...question, name: newName };
        } else {
            return question;
        }
    });

    return removedQuestions;
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
    const copyQuestions = [...questions];
    const updatedQuestions = copyQuestions.map((question) => {
        if (question.id === targetId) {
            const updatedQuestion: Question = {
                ...question,
                type: newQuestionType
            };

            if (newQuestionType !== "multiple_choice_question") {
                updatedQuestion.options = [];
            }

            return updatedQuestion;
        } else {
            return question;
        }
    });

    return updatedQuestions;
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
    const copyQuestions = [...questions];
    const updatedQuestions = copyQuestions.map((question) => {
        if (question.id === targetId) {
            const updatedOptions = [...question.options];

            if (targetOptionIndex === -1) {
                updatedOptions.push(newOption);
            } else {
                updatedOptions[targetOptionIndex] = newOption;
            }
            return {
                ...question,
                options: updatedOptions
            };
        } else {
            return question;
        }
    });

    return updatedQuestions;
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
    const copyQuestions = [...questions];
    const newQuestions: Question[] = [];

    copyQuestions.map((q: Question) => {
        newQuestions.push(q);

        if (q.id === targetId) {
            const duplicate = duplicateQuestion(newId, q);
            newQuestions.push(duplicate);
        }
    });

    return newQuestions;
}
