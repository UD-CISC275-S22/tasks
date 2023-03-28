import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let newQuestions = JSON.parse(JSON.stringify(questions));
    newQuestions = questions.filter(
        (questions: Question): boolean => questions.published
    );
    return newQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let newQuestions = JSON.parse(JSON.stringify(questions));
    newQuestions = newQuestions.filter(
        (newQuestions: Question): boolean =>
            newQuestions.body != "" && newQuestions.expected != "" //&&
        //questions.type == "multiple_choice_question" &&
        //questions.options.length != 0
    );
    // for (let i = 0; i < newQuestions.length; i++) {
    //     if (newQuestions[i].type == "multiple_choice_question") {
    //         if (newQuestions[i].options.length == 0) {
    //             newQuestions.splice(i, 1);
    //         }
    //     }
    // }
    return newQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const newQuestions = JSON.parse(JSON.stringify(questions));
    const copy = newQuestions.filter(
        (newQuestions: Question): boolean => newQuestions.id == id
    );
    const SpecQ = copy[0];
    if (SpecQ == undefined) {
        return null;
    }
    return SpecQ;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let newQuestions = JSON.parse(JSON.stringify(questions));
    newQuestions = newQuestions.filter(
        (newQuestions: Question): boolean => newQuestions.id != id
    );
    return newQuestions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const newQuestions = JSON.parse(JSON.stringify(questions));
    let names = [];
    names = newQuestions.map(
        (newQuestions: Question): string => newQuestions.name
    );
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const newQuestions = JSON.parse(JSON.stringify(questions));
    let sum = 0;
    for (let i = 0; i < newQuestions.length; i++) {
        sum += newQuestions[i].points;
    }
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let newQuestions = JSON.parse(JSON.stringify(questions));
    newQuestions = newQuestions.filter(
        (newQuestions: Question): boolean => newQuestions.published
    );
    let sum = 0;
    for (let i = 0; i < newQuestions.length; i++) {
        sum += newQuestions[i].points;
    }
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
    let message = questions
        .map(
            (questions: Question): string =>
                `${questions.id},${questions.name},${questions.options.length},${questions.points},${questions.published}`
        )
        .join("\n");
    message = "id,name,options,points,published\n".concat(message);
    return message;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (questions: Question): Answer => ({
            questionId: questions.id,
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
    const newQuestions = questions.map(
        (questions: Question): Question => ({
            id: questions.id,
            name: questions.name,
            type: questions.type,
            body: questions.body,
            expected: questions.expected,
            options: questions.options,
            points: questions.points,
            published: true
        })
    );
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let bool = true;
    const typ = questions[0];
    for (let i = 0; i < questions.length; i++) {
        if (typ.type != questions[i].type) {
            bool = false;
        }
    }
    return bool;
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
    const blank = makeBlankQuestion(id, name, type);
    const newQuestions = JSON.parse(JSON.stringify(questions));
    newQuestions.push(blank);
    return newQuestions;
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
    const newQuestions = JSON.parse(JSON.stringify(questions));
    for (let i = 0; i < newQuestions.length; i++) {
        if (newQuestions[i].id == targetId) {
            newQuestions[i].name = newName;
        }
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
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newQuestions = JSON.parse(JSON.stringify(questions));
    for (let i = 0; i < newQuestions.length; i++) {
        if (newQuestions[i].id == targetId) {
            newQuestions[i].type = newQuestionType;
            if (newQuestionType == "short_answer_question") {
                newQuestions[i].options = [];
            }
        }
    }
    return newQuestions;
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
    const newQuestions = JSON.parse(JSON.stringify(questions));
    for (let i = 0; i < newQuestions.length; i++) {
        if (newQuestions[i].id == targetId) {
            if (targetOptionIndex == -1){
                const ind = newQuestions[i].options.length;
                newQuestions[i].options[ind] = newOption;
            } else {
                newQuestions[i].options[targetOptionIndex] = newOption;
            }
        }
    }
    return newQuestions;
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
    const newQuestions = JSON.parse(JSON.stringify(questions));
    for (let i = 0; i < newQuestions.length; i++) {
        if (newQuestions[i].id == targetId) {
            const dup = duplicateQuestion(newId, newQuestions[i]);
            newQuestions.splice(i + 1, 0, dup);
        }
    }
    return newQuestions;
}
