import { text } from "stream/consumers";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { addOption, makeBlankQuestion, duplicateQuestion } from "./objects";
import { Options } from "prettier";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const published = questions.filter(
        (ques: Question): boolean => ques.published
    );
    return published;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const questions1 = questions.map(
        (ques: Question): Question => ({ ...ques })
    );
    const nonempty = questions1.filter(
        (q: Question): boolean =>
            q.body !== "" || q.expected !== "" || q.options.length !== 0
    );
    return nonempty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const questions1 = questions.map(
        (ques: Question): Question => ({ ...ques })
    );
    const givenid = questions1.find((ques: Question): boolean => ques.id == id);
    if (givenid === undefined) {
        return null;
    }
    return givenid;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const questions1 = questions.map(
        (ques: Question): Question => ({ ...ques })
    );
    const notgivenid = questions1.filter((q: Question): boolean => q.id !== id);
    return notgivenid;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const questions1 = questions.map(
        (ques: Question): Question => ({ ...ques })
    );
    const qnames = questions1.map((q: Question): string => q.name);
    return qnames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const questions1 = questions.map(
        (ques: Question): Question => ({ ...ques })
    );
    const sumpoints = questions1.reduce(
        (currentSum: number, ques: Question) => currentSum + ques.points,
        0
    );
    return sumpoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const questions1 = questions.map(
        (ques: Question): Question => ({ ...ques })
    );
    const published = questions1.filter(
        (ques: Question): boolean => ques.published === true
    );
    const sum = published.reduce(
        (currentTotal: number, ques: Question) => currentTotal + ques.points,
        0
    );
    return sum;
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
    const questionCSV = questions
        .map(
            (ques: Question): string =>
                `${ques.id},${ques.name},${ques.options.length},${
                    ques.points
                },${ques.published ? "true" : "false"}`
        )
        .join("\n");
    return "id,name,options,points,published\n" + questionCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const questions1 = questions.map(
        (ques: Question): Question => ({ ...ques })
    );
    const answers = questions1.map(
        (ques: Question): Answer => ({
            questionId: ques.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const published = questions.map(
        (ques: Question): Question => ({ ...ques, published: true })
    );
    return published;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const questions1 = questions.map(
        (ques: Question): Question => ({ ...ques })
    );
    const sametype = questions1.every(
        (ques) => ques.type === questions1[0].type
    );
    return sametype;
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
    const questions1 = questions.map(
        (ques: Question): Question => ({ ...ques })
    );
    const added = [...questions1, makeBlankQuestion(id, name, type)];
    return added;
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
    const questions1 = questions.map(
        (ques: Question): Question => ({ ...ques })
    );
    const questions2 = questions1.map(
        (ques: Question): Question => ({
            ...ques,
            name: ques.id === targetId ? newName : ques.name
        })
    );
    return questions2;
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
    const questions1 = questions.map(
        (ques: Question): Question => ({ ...ques })
    );
    const questions2 = questions1.map(
        (ques: Question): Question => ({
            ...ques,
            type: ques.id === targetId ? newQuestionType : ques.type,
            options:
                ques.id === targetId &&
                newQuestionType !== "multiple_choice_question"
                    ? []
                    : ques.options
        })
    );
    return questions2;
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
    const questions1 = [...questions];
    const ind = questions1.findIndex(
        (ques: Question): boolean => ques.id === targetId
    );
    const targetQuestion = questions1[ind];
    const newOptions = [...targetQuestion.options];
    if (targetOptionIndex === -1) {
        newOptions.push(newOption);
    } else {
        newOptions.splice(targetOptionIndex, 1, newOption);
    }
    const newQuestion = {
        ...questions[ind],
        options: newOptions
    };
    questions1.splice(ind, 1, newQuestion);
    return questions1;
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
    const questions1 = [...questions];
    const ind = questions1.findIndex(
        (ques: Question): boolean => ques.id === targetId
    );
    const firstSlice = questions1.slice(0, ind + 1);
    const secondSlice = questions1.slice(ind + 1);
    const questions2 = [
        ...firstSlice,
        duplicateQuestion(newId, questions1[ind]),
        ...secondSlice
    ];
    return questions2;
}
