/* eslint-disable prettier/prettier */
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";
//import { Console } from "console";


export function getPublishedQuestions(questions: Question[]): Question[] {
    const newArray: Question[] = questions.filter(
        (question: Question): boolean => question.published
    );
    return newArray;
}

export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const newArray: Question[] = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
    return newArray;
}


export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const idIndex = questions.find((question): boolean => question.id === id);
    const result = typeof idIndex === "undefined" ? null : idIndex;
    return result;
}

export function removeQuestion(questions: Question[], id: number): Question[] {
    const idIndex = questions.find((question): boolean => question.id === id);
    const result = questions.filter((question) => question !== idIndex);
    return result;
}

export function getNames(questions: Question[]): string[] {
    const newArr: string[] = questions.map(
        (questionName: Question): string => questionName.name
    );
    return newArr;
}


export function sumPoints(questions: Question[]): number {
    const newArr = questions.reduce(
        (currentTotal: number, question: Question): number =>
            (currentTotal += question.points),
        0
    );
    return newArr;
}


export function sumPublishedPoints(questions: Question[]): number {
    const newArr = [...questions];
    const anotherArr = newArr.filter(
        (element: Question): boolean => element.published == true
    );
    if (anotherArr.length === 0) {
        return 0;
    }

    const sumArr = anotherArr.reduce(
        (currentTotal: number, qAmount: Question): number =>
            (currentTotal += qAmount.points),
        0
    );
    return sumArr;
}


export function toCSV(questions: Question[]): string {
    const csVReturn =
        "id,name,options,points,published\n" +
        questions
            .map(
                (question: Question): string =>
                    `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
            )
            .join("\n");
    return csVReturn;
}


export function makeAnswers(questions: Question[]): Answer[] {
    const arrAnswer = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return arrAnswer;
}


export function publishAll(questions: Question[]): Question[] {
    const publishAll: Question[] = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return publishAll;
}


export function sameType(questions: Question[]): boolean {
    const len = questions.length;
    const sameType = questions.filter(
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

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newArr = makeBlankQuestion(id, name, type);
    const anotherArr = [...questions, newArr];
    return anotherArr;
}


export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const questionTarget = findQuestion(newQuestions, targetId);

    const targetIndex: number = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );

    if (questionTarget != null) {
        const copyTarget = { ...questionTarget, name: newName };
        newQuestions.splice(targetIndex, 1, copyTarget);
    }

    return newQuestions;
}


export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    if (newQuestionType != "multiple_choice_question") {
        return questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? { ...question, type: newQuestionType, options: [] }
                    : { ...question }
        );
    } else {
        return questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? { ...question, type: newQuestionType }
                    : { ...question }
        );
    }
}


export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const spliceFunction = (question: Question) => {
        const newArray = [...question.options];
        newArray.splice(targetOptionIndex, 1, newOption);
        return newArray;
    };
    if (targetOptionIndex === -1) {
        return questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? {
                        ...question,
                        options: [...question.options, newOption]
                    }
                    : { ...question }
        );
    } else {
        return questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? { ...question, options: spliceFunction(question) }
                    : { ...question }
        );
    }
}


export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const index = questions.findIndex(({ id }) => targetId === id);
    const duplication = [...questions];
    duplication.splice(
        index + 1,
        0,
        duplicateQuestion(newId, questions[index])
    );

    return duplication;
}
