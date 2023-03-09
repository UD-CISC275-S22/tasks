import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const copyGetPublishedQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    return copyGetPublishedQuestions.filter(
        (question: Question): boolean => question.published
    );
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const deepCopyGetNonEmptyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    return deepCopyGetNonEmptyQuestions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
// eslint-disable-next-line prettier/prettier
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const deepCopyFindQuestion = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const found = deepCopyFindQuestion.filter(
        // eslint-disable-next-line prettier/prettier
        (question: Question): boolean => question.id === id
    );
    if (found.length === 0) {
        return null;
    } else {
        return found[0];
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const deepCopyRemoveQuestion = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const matchId = deepCopyRemoveQuestion.findIndex(
        (question: Question): boolean => question.id === id
    );
    deepCopyRemoveQuestion.splice(matchId, 1);
    return deepCopyRemoveQuestion;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const copyGetNames = questions.map(
        (question: Question): Question => ({ ...question })
    );
    return copyGetNames.map((question: Question): string => question.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const copySumPoints = questions.map(
        (question: Question): Question => ({ ...question })
    );
    let sum = 0;
    copySumPoints.map((question: Question): number => {
        sum += question.points;
        return sum;
    });
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const copySumPublishedPoints = questions.map(
        (question: Question): Question => ({ ...question })
    );
    let sum = 0;
    copySumPublishedPoints.map((question: Question): number => {
        if (question.published === true) {
            sum += question.points;
        } else {
            sum += 0;
        }
        return sum;
    });
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
    const copyToCSV = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const CSV = copyToCSV.map((question: Question) => {
        if (questions.indexOf(question) === questions.length - 1) {
            return (
                question.id +
                "," +
                question.name +
                "," +
                question.options.length +
                "," +
                question.points +
                "," +
                question.published
            );
        } else {
            return (
                question.id +
                "," +
                question.name +
                "," +
                question.options.length +
                "," +
                question.points +
                "," +
                question.published
            );
        }
    });
    return (
        "id," +
        "name," +
        "options," +
        "points," +
        "published\n" +
        CSV.join("\n")
    );
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const copyMakeAnswers = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const answers = copyMakeAnswers.map((question: Question) => {
        return {
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        };
    });
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const copyPublishAll = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const publish = copyPublishAll.map((question: Question) => {
        if (question.published === true) {
            return { ...question, published: true };
        } else {
            return { ...question, published: true };
        }
    });
    return publish;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const copySameType = questions.map(
        (question: Question): Question => ({ ...question })
    );
    if (questions.length === 0) {
        return true;
    } else {
        return copySameType.every(
            (question: Question): boolean =>
                question.type === copySameType[0].type
        );
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
    const copyAddNewQuestion = questions.map(
        (question: Question): Question => ({ ...question })
    );
    return [...copyAddNewQuestion, makeBlankQuestion(id, name, type)];
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
    const copyRenameQuestionById = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const findTarget = copyRenameQuestionById.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    copyRenameQuestionById[findTarget] = {
        ...copyRenameQuestionById[findTarget],
        name: newName
    };
    return copyRenameQuestionById;
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
    const copyChangeQuestion = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const findTarget = copyChangeQuestion.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    if (copyChangeQuestion[findTarget].type === "multiple_choice_question") {
        copyChangeQuestion[findTarget] = {
            ...copyChangeQuestion[findTarget],
            options: []
        };
    }
    copyChangeQuestion[findTarget] = {
        ...copyChangeQuestion[findTarget],
        type: newQuestionType
    };
    return copyChangeQuestion;
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
    const copyEditOption = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const questionWithNewOption = copyEditOption.map(
        (question: Question): Question => {
            let new_options = [];
            if (question.id === targetId) {
                if (targetOptionIndex === -1) {
                    new_options = [...question.options, newOption];
                    return { ...question, options: new_options };
                } else {
                    new_options = [...question.options];
                    new_options.splice(targetOptionIndex, 1, newOption);
                    return { ...question, options: new_options };
                }
            } else {
                return question;
            }
        }
    );
    return questionWithNewOption;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
// eslint-disable-next-line prettier/prettier
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const copyDupQuestion = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const findDuplicate = copyDupQuestion.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const duplicate = duplicateQuestion(newId, copyDupQuestion[findDuplicate]);
    copyDupQuestion.splice(findDuplicate + 1, 0, duplicate);
    return copyDupQuestion;
}
