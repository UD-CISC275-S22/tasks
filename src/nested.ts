import { urlToHttpOptions } from "url";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const pubQuestions = questions.filter(
        (quest: Question): boolean => quest.published === true
    );
    return pubQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const notEmpty = questions.filter(
        (quest: Question): boolean =>
            quest.body !== "" ||
            quest.expected !== "" ||
            quest.options.length !== 0
    );
    return notEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const findID = questions.find(
        (quest: Question): boolean => quest.id === id
    );
    return findID !== undefined ? findID : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const removedID = questions.filter(
        (quest: Question): boolean => quest.id !== id
    );
    return removedID;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((quest: Question): string => quest.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (total: number, quest: Question) => total + quest.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const findPub = questions.filter(
        (quest: Question): boolean => quest.published === true
    );
    const sum = findPub.reduce(
        (total: number, quest: Question) => total + quest.points,
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
    const topBit = "id,name,options,points,published" + "\n";
    const csv = questions
        .map(
            (quest: Question): string =>
                `${quest.id},${quest.name},${quest.options.length},${quest.points},${quest.published}`
        )
        .join("\n");
    return topBit + csv;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answer: Answer[] = questions.map(
        (quest: Question): Answer => ({
            questionId: quest.id,
            text: "",
            correct: false,
            submitted: false
        })
    );
    return answer;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newQuest = questions.map(
        (quest: Question): Question => ({ ...quest, published: true })
    );
    return newQuest;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const fil = questions.filter(
        (quest: Question) => quest.type === "short_answer_question"
    );
    return fil.length === questions.length || fil.length === 0 ? true : false;
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
    const newQuesiton = [...questions, makeBlankQuestion(id, name, type)];
    return newQuesiton;
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
    const newQuestion = questions.map(
        (quest: Question): Question =>
            quest.id === targetId ? { ...quest, name: newName } : { ...quest }
    );
    return newQuestion;
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
    const newQuestion = questions.map(
        (quest: Question): Question =>
            quest.id === targetId
                ? { ...quest, type: newQuestionType, options: [] }
                : { ...quest }
    );
    return newQuestion;
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
export function helperFunc(
    questions: Question,
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question {
    let newQuest;
    if (questions.id === targetId) {
        newQuest = {
            ...questions,
            options: [
                ...questions.options.slice(0, targetOptionIndex),
                newOption,
                ...questions.options.slice(targetOptionIndex + 1)
            ]
        };
    } else {
        newQuest = { ...questions };
    }
    return newQuest;
}
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    let ans;
    if (targetOptionIndex === -1) {
        ans = questions.map(
            (quest: Question): Question =>
                quest.id === targetId
                    ? { ...quest, options: [...quest.options, newOption] }
                    : { ...quest }
        );
    } else {
        ans = questions.map(
            (quest: Question): Question =>
                helperFunc(quest, targetId, targetOptionIndex, newOption)
        );
    }
    return ans;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
//export function handler(questions: Question, id: number): Question{
//const newQuest = questions.map((quest:Question): Question => quest.id === id ? {...quest, name: duplicateQuestion()})
//}
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const index = questions.findIndex(
        (quest: Question) => quest.id === targetId
    );
    return [
        ...questions.slice(0, index + 1),
        duplicateQuestion(newId, questions[index]),
        ...questions.slice(index + 1)
    ];
}
