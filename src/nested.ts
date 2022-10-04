//import { idText } from "typescript";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published == true
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const goodQuestions = questions.filter(
        (question: Question): boolean =>
            question.body != "" ||
            question.expected != "" ||
            question.options.length != 0
    );
    return goodQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const questionIndex = questions.findIndex(
        (question: Question): boolean => question.id == id
    );
    if (questionIndex == -1) {
        return null;
    } else {
        return questions[questionIndex];
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const removed = questions.filter(
        (question: Question): boolean => question.id != id
    );
    return removed;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((question: Question): string => question.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const points = questions.map(
        (question: Question): number => question.points
    );
    const pointsSum = points.reduce((a, b) => a + b, 0);
    return pointsSum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const published = questions.filter(
        (question: Question): boolean => question.published == true
    );
    const publishedSum = sumPoints(published);
    return publishedSum;
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
    const header = "id,name,options,points,published\n";
    const csv = questions.map(
        (question: Question): string =>
            question.id.toString() +
            "," +
            question.name +
            "," +
            question.options.length.toString() +
            "," +
            question.points.toString() +
            "," +
            question.published.toString()
    );
    return header + csv.join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (que: Question): Answer => ({
            questionId: que.id,
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
    const copyArr = [...questions];
    return copyArr.map(
        (question: Question): Question => ({ ...question, published: true })
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (
        questions.every(
            (question: Question): boolean =>
                question.type == "multiple_choice_question"
        )
    ) {
        return true;
    } else if (
        questions.every(
            (question: Question): boolean =>
                question.type == "short_answer_question"
        )
    ) {
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
    const newArr = [...questions, makeBlankQuestion(id, name, type)];
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
    const copiedArr: Question[] = [...questions];
    //copiedArr[targetId].name = newName;
    return copiedArr.map(
        (question: Question): Question => ({
            ...question,
            name: question.id === targetId ? newName : question.name
        })
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
    const changedType = questions.map(
        (question: Question): Question => ({
            ...question,
            type: question.id === targetId ? newQuestionType : question.type
        })
    );
    const changedOptions = changedType.map(
        (question: Question): Question => ({
            ...question,
            options:
                question.id === targetId &&
                question.type === "short_answer_question"
                    ? []
                    : question.options
        })
    );
    return changedOptions;
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
    let copy = [...questions];
    if (targetOptionIndex === -1) {
        copy = copy.map((question: Question): Question => {
            if (question.id === targetId) {
                question = {
                    ...question,
                    options: [...question.options, newOption]
                };
                return question;
            }
            return question;
        });
    } else {
        let temp: Question;
        copy = copy.map((question: Question): Question => {
            if (question.id === targetId) {
                temp = { ...question, options: [...question.options] };
                temp.options.splice(targetOptionIndex, 1, newOption);
                return temp;
            } else {
                return question;
            }
        });
    }
    return copy;
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
    const copiedArr = [...questions];
    const questionIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const insertQue = duplicateQuestion(newId, copiedArr[questionIndex]);
    copiedArr.splice(questionIndex + 1, 0, insertQue);
    return copiedArr;
}
/*
            const newArr = copy.map((question: Question): Question => {
        if (targetOptionIndex === -1) {
            if (question.id === targetId) {
                question.options.push(newOption);
                return question;
            } else {
                return question;
            }
        } else if (question.id === targetId) {
            question.options.splice(targetOptionIndex - 1, 1, newOption);
            return question;
        } else {
            return question;
        }
    });
    return newArr;
*/
