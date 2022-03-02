//import { moveEmitHelpers } from "typescript";
//import { urlToHttpOptions } from "url";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const published = questions.filter(
        (question: Question): boolean => question.published
    );

    return published;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    //can have one empty field
    //can't have all nonempty fields
    const nonEmpty = questions.filter(
        (question: Question): boolean =>
            !(
                question.body === "" &&
                question.expected === "" &&
                question.options.length === 0
            )
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const found = questions.find(
        (question: Question): boolean => question.id === id
    );
    if (found === undefined) {
        return null;
    }
    return found;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const noID = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return noID;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const titles = questions.map((question: Question): string => question.name);
    return titles;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const points = questions.reduce(
        (currentSum: number, question: Question) =>
            currentSum + question.points,
        0
    );
    return points;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQ = getPublishedQuestions(questions);
    const publishedPts = publishedQ.reduce(
        (currentSum: number, question: Question) =>
            currentSum + question.points,
        0
    );
    return publishedPts;
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
    //single string will be used to represent the entire file
    //first line: "id", "name", "options", "points", "published"
    //following line: contains the value for each question, separated by commas
    //OPTIONS field: number of options
    const firstline = "id,name,options,points,published";
    const questCSV = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    const allTogether = firstline + "\n" + questCSV;
    return allTogether;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers: Answer[] = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
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
    const publish = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );

    return publish;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const types = questions.map(
        (question: Question): QuestionType => question.type
    );

    const same = questions.filter(
        (question: Question): boolean => question.type === types[0]
    );

    if (questions.length === same.length) {
        return true;
    } else {
        return false;
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
    const newQues = [...questions, makeBlankQuestion(id, name, type)];
    return newQues;
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
    //produces a new array of questions, where the questions are the same except targetId
    //targetId: same except the name (newName)

    //find the targetId using reduce
    // const targetQuest = questions.find((question: Question): boolean => question.id === targetId);

    //THEN map through and find the target and change it's name
    const renamed = questions.map(
        (question: Question): Question => ({
            ...question,
            name: question.id === targetId ? newName : question.name
        })
    );

    return renamed;
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
    const changedType = questions.map(
        (question: Question): Question => ({
            ...question,
            type: question.id === targetId ? newQuestionType : question.type
        })
    );

    const changedOpt = changedType.map(
        (question: Question): Question => ({
            ...question,
            options:
                question.id === targetId &&
                newQuestionType != "multiple_choice_question"
                    ? (question.options = [])
                    : question.options
        })
    );

    return changedOpt;
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
) {
    //is targetOptionIndex -1?
    let editOpt: Question[];

    if (targetOptionIndex === -1) {
        editOpt = questions.map(
            (question: Question): Question => ({
                ...question,
                options:
                    question.id === targetId
                        ? [...question.options, newOption]
                        : question.options
            })
        );
    } else {
        editOpt = questions.map(
            (question: Question): Question =>
                help(question, targetOptionIndex, newOption, targetId)
        );
    }
    return editOpt;
}

//make a helper for editOption
export function help(
    quest: Question,
    targetOption: number,
    newOpt: string,
    targetId: number
): Question {
    let editOpt;
    if (quest.id === targetId) {
        editOpt = {
            ...quest,
            options: [...quest.options]
        };

        editOpt.options.splice(targetOption, 1, newOpt);
    } else {
        editOpt = { ...quest };
    }

    return editOpt;
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
    const duplicate: Question = questions.find(
        (question: Question): boolean => question.id === targetId
    );

    //console.log(duplicate);
    const quesCollection = [...questions];
    const duplicateIndex: number = quesCollection.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    quesCollection.splice(
        1 + duplicateIndex,
        0,
        duplicateQuestion(newId, duplicate)
    );

    return quesCollection;
}
//function submitted(
//    arg0: (question: Question) => Answer,
//    id: any,
//   text: any,
//    arg3: string,
//   submitted: any,
//   arg5: boolean,
//    correct: any,
//   arg7: boolean
//) {
//   throw new Error("Function not implemented.");
//}
