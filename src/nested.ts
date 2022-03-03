import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((num: Question): boolean => num.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (num: Question): boolean =>
            !(num.body === "" && num.expected === "" && num.options.length <= 0)
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const PublishedQuestions = questions.filter(
        (question: Question): boolean => question.id === id
    );
    return PublishedQuestions.length === 0 ? null : PublishedQuestions[0];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter(
        (num: Question): boolean => num.body.length < 0 || num.id != id
    );
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((num: Question) => num.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (total: number, num: Question) => total + num.points,
        0
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const pub = questions.filter((num: Question): boolean => num.published);
    return pub.reduce((total: number, num: Question) => total + num.points, 0);
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
    const CSV = questions
        .map(
            (num: Question): string =>
                `${num.id},${num.name},${num.options.length},${num.points},${num.published}`
        )
        .join("\n");
    return "id,name,options,points,published\n" + CSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answer: Answer[] = questions.map(
        (num: Question): Answer => ({
            questionId: num.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answer;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const Copy = [...questions];
    const publishAll = Copy.map(
        (question: Question): Question =>
            question.published === false
                ? { ...question, published: true }
                : { ...question, published: true }
    );
    return publishAll;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const Type = questions[0];
    const compare = questions.map((num: Question): boolean =>
        Type.type === num.type ? true : false
    );
    return !compare.includes(false);
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
    const addnew = makeBlankQuestion(id, name, type);
    const copy: Question[] = questions.map(
        (num: Question): Question => ({ ...num })
    );
    return [...copy, addnew];
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
    return questions.map(
        (num: Question): Question =>
            num.id === targetId ? { ...num, name: newName } : { ...num }
    );
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
    const sameid: Question[] = questions.map(
        (num: Question): Question =>
            num.id != targetId ? { ...num } : { ...num, type: newQuestionType }
    );
    const determine: Question[] = sameid.map(
        (num1: Question): Question =>
            num1.type.toString() != "multiple_choice_question"
                ? { ...num1, options: [] }
                : { ...num1 }
    );
    return determine;
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
export function replaceoptions(
    question: Question,
    Index: number,
    newOption: string,
    targetId: number
): Question {
    let answer: Question;
    if (question.id === targetId) {
        answer = {
            ...question,
            options: [...question.options]
        };
        answer.options.splice(Index, 1, newOption);
    } else {
        answer = { ...question };
    }
    return answer;
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    let answer = [...questions];

    if (targetOptionIndex === -1) {
        answer = questions.map(
            (num: Question): Question =>
                num.id === targetId
                    ? { ...num, options: [...num.options, newOption] }
                    : { ...num }
        );
    } else {
        answer = questions.map(
            (num1: Question): Question =>
                replaceoptions(num1, targetOptionIndex, newOption, targetId)
        );
    }
    return answer;
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
    const getindex = questions.findIndex(
        (num: Question): boolean => num.id === targetId
    );
    const dup = duplicateQuestion(newId, questions[getindex]);
    return inserted(questions, getindex, dup);
}

export function inserted(
    questions: Question[],
    index: number,
    question: Question
): Question[] {
    const answer = [...questions];
    answer.splice(index + 1, 0, question);
    return answer;
}
