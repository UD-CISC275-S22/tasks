/* eslint-disable indent */
import { stringify } from "querystring";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const questionsPub = questions.filter(
        (question: Question): boolean => question.published === true
    );
    return questionsPub;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const questionArray = questions;
    const nonEmptyQuestions = questionArray.filter(
        (question: Question): boolean =>
            !(
                question.body === "" &&
                question.expected === "" &&
                question.options.length === 0
            )
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const removeAll = questions.filter(
        (question: Question): boolean => question.id === id
    );
    if (removeAll.length === 0) {
        return null;
    } else {
        return removeAll[0];
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const removeId = questions.filter(
        (question: Question): boolean => question.id != id
    );
    return removeId;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const newArray = questions.map(
        (question: Question): string => question.name
    );
    return newArray;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (currentTotal: number, question: Question) =>
            currentTotal + question.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedList = questions.filter(
        (question: Question) => question.published === true
    );
    const sumPublishedPoints = publishedList.reduce(
        (currentTotal: number, question: Question) =>
            currentTotal + question.points,
        0
    );
    return sumPublishedPoints;
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
    const attributes = "id,name,options,points,published";
    const objectArray = questions.reduce(
        (currentString: string, question: Question) =>
            currentString +
            "\n" +
            question.id +
            "," +
            question.name +
            "," +
            question.options.length +
            "," +
            question.points +
            "," +
            question.published,
        ""
    );
    const finalString = attributes + objectArray;
    return finalString;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answerArray = questions.map((question: Question): Answer => {
        return {
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        };
    });
    return answerArray;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publishedArray = questions.map((question: Question): Question => {
        return {
            id: question.id,
            name: question.name,
            body: question.body,
            type: question.type,
            options: question.options,
            expected: question.expected,
            points: question.points,
            published: true
        };
    });
    return publishedArray;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    } else {
        const questionHolder = questions[0];
        const holdType = questionHolder.type;
        const typer = questions.filter(
            (question: Question): boolean => holdType === question.type
        );
        if (typer.length === questions.length) {
            return true;
        } else {
            return false;
        }
    }
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
    const questionArray = [...questions, makeBlankQuestion(id, name, type)];
    return questionArray;
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
    const idArray = questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? {
                      id: question.id,
                      name: newName,
                      body: question.body,
                      type: question.type,
                      options: question.options,
                      expected: question.expected,
                      points: question.points,
                      published: question.published
                  }
                : question
    );
    return idArray;
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
    if (newQuestionType === "short_answer_question") {
        return questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? {
                          id: question.id,
                          name: question.name,
                          body: question.body,
                          type: newQuestionType,
                          options: [],
                          expected: question.expected,
                          points: question.points,
                          published: question.published
                      }
                    : question
        );
    } else {
        return questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? {
                          id: question.id,
                          name: question.name,
                          body: question.body,
                          type: newQuestionType,
                          options: question.options,
                          expected: question.expected,
                          points: question.points,
                          published: question.published
                      }
                    : question
        );
    }
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
export function helperSplice(
    arrayHelp: string[],
    targetOptionIndex: number,
    newOption: string
): string[] {
    const arrayHelper = [...arrayHelp];
    arrayHelper.splice(targetOptionIndex, 1, newOption);
    return arrayHelper;
}
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    if (targetOptionIndex === -1) {
        return questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? {
                          id: question.id,
                          name: question.name,
                          body: question.body,
                          type: question.type,
                          options: [...question.options, newOption],
                          expected: question.expected,
                          points: question.points,
                          published: question.published
                      }
                    : question
        );
    } else {
        const mapper = questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? {
                          id: question.id,
                          name: question.name,
                          body: question.body,
                          type: question.type,
                          options: helperSplice(
                              question.options,
                              targetOptionIndex,
                              newOption
                          ),
                          expected: question.expected,
                          points: question.points,
                          published: question.published
                      }
                    : question
        );
        return mapper;
    }
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
    const idHolder = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const arrayHolder = [...questions];

    arrayHolder.splice(idHolder + 1, 0, {
        id: newId,
        name: "Copy of " + questions[idHolder].name,
        type: questions[idHolder].type,
        body: questions[idHolder].body,
        expected: questions[idHolder].expected,
        options: questions[idHolder].options,
        points: questions[idHolder].points,
        published: questions[idHolder].published
    });
    return arrayHolder;
}
