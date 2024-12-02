import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const quesPublished = questions.filter(
        (questions: Question): boolean => questions.published
    );
    return quesPublished;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpQuestion = questions.filter(
        (questions: Question): boolean =>
            questions.body.length !== 0 ||
            questions.expected.length !== 0 ||
            questions.options.length !== 0
    );
    return nonEmpQuestion;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const fQ = questions.filter(
        (questions: Question): boolean => questions.id === id
    );
    return fQ.length !== 0 ? fQ[0] : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const questionWithId = questions.filter(
        (questions: Question): boolean => questions.id !== id
    );
    return questionWithId;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const questionName = questions.map(
        (questions: Question): string => questions.name
    );
    return questionName;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sumP = questions.reduce(
        (currentSum: number, questions: Question) =>
            currentSum + questions.points,
        0
    );
    return sumP;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const toSum = questions.filter(
        (questions: Question): boolean => questions.published
    );
    const sumPQ = toSum.reduce(
        (currentSum: number, questions: Question) =>
            currentSum + questions.points,
        0
    );
    return sumPQ;
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
    const questionCSV = questions
        .map(
            (questions: Question): string =>
                `${questions.id},${questions.name},${questions.options.length},${questions.points},${questions.published}`
        )
        .join("\n");
    return "id,name,options,points,published" + "\n" + questionCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const Ans = questions.map(
        (questions: Question): Answer => ({
            questionId: questions.id,
            correct: false,
            text: "",
            submitted: false
        })
    );
    return Ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const pA = questions.map(
        (questions: Question): Question => ({ ...questions, published: true })
    );
    return pA;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const qT = questions.map((question: Question) => question.type);
    const element = qT[0];
    const sT = qT.every((value: string) => value === element);
    return sT;
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
    const aNQ = [...questions, makeBlankQuestion(id, name, type)];
    return aNQ;
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
    const rQBI: Question[] = questions.map(
        (questions: Question): Question => ({
            ...questions,
            name: questions.id === targetId ? newName : questions.name
        })
    );
    return rQBI;
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
    const cQTBI: Question[] = questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? { ...question, type: newQuestionType }
                : { ...question }
    );
    const cQTBIf = cQTBI.map(
        (question: Question): Question =>
            question.type === "multiple_choice_question"
                ? { ...question }
                : { ...question, options: [] }
    );
    return cQTBIf;
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
export function eOhelper(
    question: Question,
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    let eH: Question;
    if (question.id === targetId) {
        eH = { ...question, options: [...question.options] };
        eH.options.splice(targetOptionIndex, 1, newOption);
    } else {
        eH = { ...question };
    }
    return eH;
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    let qIDf: Question[];
    if (targetOptionIndex === -1) {
        qIDf = questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? { ...question, options: [...question.options, newOption] }
                    : { ...question }
        );
    } else {
        qIDf = questions.map(
            (question: Question): Question =>
                eOhelper(question, targetId, targetOptionIndex, newOption)
        );
    }
    return qIDf;
}
/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function replace(
    questions: Question[],
    index: number,
    newQues: Question
): Question[] {
    const cp = [...questions];
    cp.splice(index + 1, 0, newQues);
    return cp;
}

export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const idIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const duplicate = duplicateQuestion(newId, questions[idIndex]);
    const ans = replace(questions, idIndex, duplicate);
    return ans;
}
