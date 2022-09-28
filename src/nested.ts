import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const checkPub = questions.filter(
        (queSet: Question): boolean => queSet.published
    );
    return checkPub;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const checkEmp = questions.filter(
        (queSet: Question): boolean =>
            queSet.body != "" ||
            queSet.expected != "" ||
            queSet.options.length != 0
    );
    //

    //console.log(checkEmp);
    return checkEmp;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const findId = questions.find(
        (question: Question): boolean => question.id === id
    );
    if (findId === undefined) {
        return null;
    }
    return findId;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const checkID = questions.filter(
        (question: Question): boolean => question.id != id
    );
    return checkID;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const nameArr = questions.map((que: Question): string => que.name);
    return nameArr;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (currentTotal: number, num: Question) => currentTotal + num.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const findPublished = questions.filter(
        (question: Question): boolean => question.published === true
    );
    //console.log(findPublished);
    const sum = findPublished.reduce(
        (currentTotal: number, num: Question) => currentTotal + num.points,
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
    const csvArr = questions.map(
        (question: Question): string =>
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
    /*console.log(csvArr);
    console.log(csvArr.toString());
    console.log(csvArr.join("\n"));
    */
    const test = ["id,name,options,points,published", ...csvArr];
    //return "id,name,options,points,published" + "\n" + csvArr.join("\n");
    return test.join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const addAns = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return addAns;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const rePublish = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return rePublish;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 * //make a const with the value of the type of the first question, then use the map to see if all question's types match the first one's.
 */
export function sameType(questions: Question[]): boolean {
    const firstQues = questions.find(
        (question: Question): boolean =>
            question.type === "multiple_choice_question" ||
            question.type === "short_answer_question"
    );
    const checkType = questions.every(
        (question: Question): boolean => question.type === questions[0].type //why this works????????
    );
    return checkType;
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
    const blankQ: Question = makeBlankQuestion(id, name, type);
    //console.log(empQus);
    const result = questions.map(
        (question: Question): Question => ({
            ...question
        })
    );
    result.push(blankQ);
    //console.log(result);
    return result;
}

//new object: object = makeBlankObject(id, name, objectype)

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
    const checkId = questions.map(
        (question: Question): Question =>
            question.id != targetId ? question : { ...question, name: newName }
    );
    return checkId;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 * /*if (newQuestionType != "multiple_choice_question") {
            question.id != targetId
                ? question
                : { ...question, type: newQuestionType, options: [] };
        } else if (newQuestionType === "multiple_choice_question") {
            question.id != targetId
                ? question
                : { ...question, type: newQuestionType };
        }
        return question;
        */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const checkIdtype = questions.map((question: Question): Question => {
        if (question.id === targetId) {
            if (newQuestionType != "multiple_choice_question") {
                return { ...question, type: newQuestionType, options: [] };
            } else {
                return { ...question, type: newQuestionType };
            }
        }
        return question;
    });
    return checkIdtype;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces. Map it
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const checkIdfirst = questions.map((question: Question): Question => {
        if (question.id === targetId) {
            if (targetOptionIndex === -1) {
                return {
                    ...question,
                    options: [...question.options, newOption]
                };
            } else {
                const questionCopy = {
                    ...question,
                    options: [...question.options]
                };
                questionCopy.options.splice(targetOptionIndex, 1, newOption);
                return questionCopy;
            }
        }
        return question;
    });
    return checkIdfirst;
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
    //const duoQues: Question = duplicateQuestion(newId, questions);
    const checkId = questions.find(
        (question: Question): boolean => question.id === targetId
    );
    const checkIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const storeArray = [...questions];
    if (checkId != undefined) {
        storeArray.splice(checkIndex + 1, 0, duplicateQuestion(newId, checkId));
    }
    return storeArray;
}
