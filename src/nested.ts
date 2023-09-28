import { create } from "domain";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const onlyPublished = questions.filter(
        (question: Question): boolean => question.published === true
    );
    return onlyPublished;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
    return nonEmpty;
    //needs to be done properly!
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const sameID = questions.find(
        (question: Question): boolean => question.id === id
    );
    if (sameID) {
        return sameID;
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const notSame = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return notSame;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const questionNames = questions.map(
        (question: Question): string => question.name
    );
    return questionNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const nameTotal = questions.reduce(
        (currSum: number, query: Question) => currSum + query.points,
        0
    );
    return nameTotal;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const removedUnpublisded = questions.filter(
        (question: Question): boolean => question.published === true
    );
    const publishedTotal = removedUnpublisded.reduce(
        (currSum: number, question: Question) => currSum + question.points,
        0
    );
    return publishedTotal;
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
    const CSVstart = "id,name,options,points,published\n";
    const CSV = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return CSVstart + CSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const thisAnswer: Answer[] = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return thisAnswer;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const nowPublished = questions.map((question: Question) => ({
        ...question,
        published: true
    }));
    return nowPublished;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    //const constent = questions[0].type;
    if (questions.length === 0) {
        return true;
    }
    const allSame = questions.every(
        (question: Question): boolean => question.type === questions[0].type
    );
    return allSame;
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
    const blankQuestion = {
        id,
        name,
        type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
    const newArr = [...questions, blankQuestion];
    return newArr;
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
    const findTarget = questions.map(
        (question: Question): Question => ({
            ...question,
            name: question.id === targetId ? newName : question.name
        })
    );
    return findTarget;
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
    const findTarget = questions.map(
        (question: Question): Question => ({
            ...question,
            options:
                question.id === targetId &&
                question.type === "multiple_choice_question"
                    ? []
                    : question.options,
            type: question.id === targetId ? newQuestionType : question.type
        })
    );
    return findTarget;
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
    inputQuestions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const deepCopy = inputQuestions.map(
        (question: Question): Question => ({
            ...question,
            options: question.options
        })
    );
    const findIndex: number = deepCopy.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    if (targetOptionIndex === -1) {
        const negativePush = deepCopy.map((question: Question): Question => {
            if (question.id === targetId) {
                const append: Question = {
                    ...question,
                    options: [...question.options, newOption]
                };
                //question.options.push(newOption);
                return append;
            } else {
                return question;
            }
        });
        return negativePush;
    } else {
        const replaceQuestion = deepCopy.map((question: Question): Question => {
            if (question.id === targetId) {
                const replace: Question = {
                    ...question,
                    options: [...question.options]
                };
                replace.options.splice(targetOptionIndex, 1, newOption);
                return replace;
            } else {
                return question;
            }
        });
        return replaceQuestion;
    }
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    const copyOfQuestion = {
        ...oldQuestion,
        name: "Copy of " + oldQuestion.name,
        id: id,
        published: false
    };
    return copyOfQuestion;
}

export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: question.options
        })
    );
    const targetIndex = deepCopy.map((question: Question): Question[] =>
        question.id === targetId
            ? [{ ...question }, duplicateQuestion(newId, question)]
            : [question]
    );
    return targetIndex.flat();
}
//do another git pull after git pull --upstream
//task 8
