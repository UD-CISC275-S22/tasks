/* eslint-disable prettier/prettier */
import { type } from "@testing-library/user-event/dist/type";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const newArray: Question[] = questions.filter(
        (question: Question): boolean => question.published
    );
    return newArray;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const newArray: Question[] = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
    return newArray;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const idIndex = questions.find((question): boolean => question.id === id);
    const result = typeof idIndex === "undefined" ? null : idIndex;
    return result;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const idIndex = questions.find((question): boolean => question.id === id);
    const result = questions.filter((question) => question !== idIndex);
    return result;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const newArr: string[] = questions.map(
        (questionName: Question): string => questionName.name
    );
    return newArr;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const newArr = questions.reduce(
        (currentTotal: number, question: Question): number =>
            (currentTotal += question.points),
        0
    );
    return newArr;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const newArr = [...questions];
    const anotherArr = newArr.filter(
        (element: Question): boolean => element.published == true
    );
    if (anotherArr.length === 0) {
        return 0;
    }
    //Reduce to implement counter functionallity
    const sumArr = anotherArr.reduce(
        (currentTotal: number, qAmount: Question): number =>
            (currentTotal += qAmount.points),
        0
    );
    return sumArr;
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
export function toCSV(_questions: Question[]): string {
    const csVReturn =
        "id,name,options,points,published\n" +
        _questions
            .map(
                (question: Question): string =>
                    `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
            )
            .join("\n");
    return csVReturn;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(_questions: Question[]): Answer[] {
    const arrAnswer = _questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return arrAnswer;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(_questions: Question[]): Question[] {
    const publishAll: Question[] = _questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return publishAll;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(_questions: Question[]): boolean {
    const len = _questions.length;
    const sameType = _questions.filter(
        (questions: Question): boolean =>
            questions.type === "short_answer_question"
    );
    if (len === sameType.length) {
        return true;
    } else if (sameType.length === 0) {
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
    _questions: Question[],
    _id: number,
    _name: string,
    _type: QuestionType
): Question[] {
    const newArr = makeBlankQuestion(_id, _name, _type);
    const anotherArr = [..._questions, newArr];
    return anotherArr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    _questions: Question[],
    _targetId: number,
    _newName: string
): Question[] {
    const newQuestions = _questions.map(
        (question: Question): Question => ({ ...question })
    );

    const questionTarget = findQuestion(newQuestions, _targetId);

    const targetIndex: number = _questions.findIndex(
        (question: Question): boolean => question.id === _targetId
    );
    
    if (questionTarget != null) {
        const copyTarget = { ...questionTarget, name: _newName };
        newQuestions.splice(targetIndex, 1, copyTarget);
    }

    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    _questions: Question[],
    _targetId: number,
    _newQuestionType: QuestionType
): Question[] {
    if (_newQuestionType != "multiple_choice_question") {
        return _questions.map(
            (question: Question): Question =>
                question.id === _targetId
                    ? { ...question, type: _newQuestionType, options: [] }
                    : { ...question }
        );
    } else {
        return _questions.map(
            (question: Question): Question =>
                question.id === _targetId
                    ? { ...question, type: _newQuestionType }
                    : { ...question }
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
export function editOption(
    _questions: Question[],
    _targetId: number,
    _targetOptionIndex: number,
    _newOption: string
): Question[] {
    const spliceFunction = (question: Question) => {
        const newArray = [...question.options];
        newArray.splice(_targetOptionIndex, 1, _newOption);
        return newArray;
    };
    if (_targetOptionIndex === -1) {
        return _questions.map(
            (question: Question): Question =>
                question.id === _targetId
                    ? {
                        ...question,
                        options: [...question.options, _newOption]
                    }
                    : { ...question }
        );
    } else {
        return _questions.map(
            (question: Question): Question =>
                question.id === _targetId
                    ? { ...question, options: spliceFunction(question) }
                    : { ...question }
        );
    }
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    _questions: Question[],
    _targetId: number,
    _newId: number
): Question[] {
    const index = _questions.findIndex(({ id }) => _targetId === id);
    const duplication = [..._questions];
    duplication.splice(
        index + 1,
        0,
        duplicateQuestion(_newId, _questions[index])
    );

    return duplication;
}
