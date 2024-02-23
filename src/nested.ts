import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const copy: Question[] = questions
        .map(
            (question: Question): Question => ({
                ...question,
                options: [...question.options]
            })
        )
        .filter((publish: Question): boolean => publish.published === true);
    return copy;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const empty: Question[] = questions
        .map(
            (question: Question): Question => ({
                ...question,
                options: [...question.options]
            })
        )
        .filter(
            (eQuestion: Question): boolean =>
                eQuestion.body !== "" ||
                eQuestion.expected !== "" ||
                eQuestion.options.length !== 0
        );
    return empty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const copy: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const match: Question | undefined = copy.find(
        (question: Question): boolean => question.id === id
    );
    return match || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const copy: Question[] = questions
        .map(
            (question: Question): Question => ({
                ...question,
                options: [...question.options]
            })
        )
        .filter((exclude: Question): boolean => exclude.id !== id);
    return copy;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const copy: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const result: string[] = copy.map(
        (question: Question): string => question.name
    );
    return result;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const copy: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const result: number = copy.reduce(
        (currentTotal: number, qNum: Question): number =>
            currentTotal + qNum.points,
        0
    );
    return result;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const copy: Question[] = questions
        .map(
            (question: Question): Question => ({
                ...question,
                options: [...question.options]
            })
        )
        .filter((publish: Question): boolean => publish.published === true);
    const result: number = copy.reduce(
        (currentTotal: number, num: Question) => currentTotal + num.points,
        0
    );
    return result;
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
    let csv = "id,name,options,points,published\n";
    const copy: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const result: string = copy
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    csv += result;
    return csv;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const result: Answer[] = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return result;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const copy: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
            published: true
        })
    );
    return copy;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const copy: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const check: Question = { ...copy[0] };
    const result: boolean = copy.every(
        (question: Question) => question.type === check.type
    );
    return result;
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
    const copy: Question[] = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const newQ: Question = makeBlankQuestion(id, name, type);
    const updatedCopy: Question[] = [...copy, newQ];
    return updatedCopy;
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
    const copy: Question[] = questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? { ...question, name: newName }
                : { ...question }
    );
    return copy;
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
    const copy: Question[] = questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? newQuestionType === "multiple_choice_question"
                    ? { ...question, type: newQuestionType }
                    : { ...question, type: newQuestionType, options: [] }
                : { ...question }
    );
    return copy;
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
    const copy: Question[] = questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? targetOptionIndex === -1
                    ? { ...question, options: [...question.options, newOption] }
                    : {
                          ...question,
                          options: question.options.map((option, index) =>
                              index === targetOptionIndex ? newOption : option
                          )
                      }
                : { ...question, options: [...question.options] }
    );
    return copy;
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
    const findQuestion: number = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );

    if (findQuestion !== -1) {
        const copy: Question[] = questions.map(
            (question: Question): Question => ({ ...question })
        );
        const modifiedQuestion = duplicateQuestion(newId, {
            ...copy[findQuestion]
        });
        copy.splice(findQuestion + 1, 0, modifiedQuestion);
        return copy;
    } else {
        return questions;
    }
}
