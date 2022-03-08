import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const pubQues = questions.filter(
        (question: Question): boolean => question.published
    );
    return pubQues;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonemQues = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length > 0
    );
    return nonemQues;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const findQues = questions.find(
        (question: Question): boolean => question.id === id
    );
    if (findQues === undefined) {
        return null;
    }
    return findQues;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const noidQues = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return noidQues;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const nameOfQues = questions.map(
        (question: Question): string => question.name
    );
    return nameOfQues;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const getPoints = questions.map(
        (question: Question): number => question.points
    );
    const addP = getPoints.reduce(
        (currentTotal: number, point: number) => currentTotal + point,
        0
    );
    return addP;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const getPub = questions.filter(
        (question: Question): boolean => question.published === true
    );
    const getPoints = getPub.map(
        (question: Question): number => question.points
    );
    const sum = getPoints.reduce(
        (currentT: number, point: number): number => currentT + point,
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
    const headers = "id,name,options,points,published\n";
    const CSV = questions.map(
        (question: Question): string =>
            question.id +
            "," +
            question.name +
            "," +
            question.options.length +
            "," +
            question.points +
            "," +
            question.published +
            "\n"
    );
    return headers + CSV.join("").trim();
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const qToA = questions.map((question: Question): Answer => {
        return {
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        };
    });
    return qToA;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const pQues = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return pQues;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const ifSame = questions.every(
        (question: Question): boolean => question.type === questions[0].type
    );
    return ifSame;
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
    return [...questions, makeBlankQuestion(id, name, type)];
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
    const backup_ques = [...questions];
    const ifTargetId = questions.filter(
        (question: Question): boolean => question.id !== targetId
    );
    if (ifTargetId.length === questions.length) {
        return backup_ques;
    }
    const findIdx = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const tarOne = backup_ques[findIdx];
    const change = { ...tarOne, name: newName };
    backup_ques.splice(findIdx, 1, change);
    return backup_ques;
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
    const backup_ques = [...questions];
    const ifTargetId = questions.filter(
        (question: Question): boolean => question.id !== targetId
    );
    if (ifTargetId.length === questions.length) {
        return backup_ques;
    }
    const findIdx = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const tarOne = backup_ques[findIdx];
    if (tarOne.type !== "multiple_choice_question") {
        const newType = { ...tarOne, type: newQuestionType };
        backup_ques.splice(findIdx, 1, newType);
        return backup_ques;
    } else {
        const newType2 = { ...tarOne, type: newQuestionType, options: [] };
        backup_ques.splice(findIdx, 1, newType2);
        return backup_ques;
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
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    console.log(questions);
    const backup_ques = [...questions];
    const ifTargetId = questions.filter(
        (question: Question): boolean => question.id !== targetId
    );
    if (ifTargetId.length === questions.length) {
        return backup_ques;
    }
    const findIdx = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const tarOne = backup_ques[findIdx];
    if (targetOptionIndex === -1) {
        const newTar = {
            ...tarOne,
            options: [...tarOne.options, newOption]
        };
        backup_ques.splice(findIdx, 1, newTar);
        return backup_ques;
    } else {
        const newOp = tarOne.options.map((option: string): string =>
            option === tarOne.options[targetOptionIndex] ? newOption : option
        );
        const newTar2 = {
            ...tarOne,
            options: newOp
        };

        backup_ques.splice(findIdx, 1, newTar2);
        //console.log(backup_ques);
        return backup_ques;
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
    const backup_ques = [...questions];
    const ifTargetId = questions.filter(
        (question: Question): boolean => question.id !== targetId
    );
    if (ifTargetId.length === questions.length) {
        return backup_ques;
    }
    const findIdx = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const tarOne = backup_ques[findIdx];
    backup_ques.splice(findIdx + 1, 0, duplicateQuestion(newId, tarOne));
    // console.log(backup_ques);
    return backup_ques;
}
