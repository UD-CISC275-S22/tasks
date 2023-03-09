// import { stringify } from "querystring";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuestions = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length > 0
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const idQuestion = questions.find(
        (question: Question): boolean => question.id === id
    );
    if (idQuestion === undefined) {
        return null;
    }
    return idQuestion;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const noQuestion = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return noQuestion;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const justNames = questions.map(
        (question: Question): string => question.name
    );
    return justNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const pointsTotal = questions.reduce(
        (currentSum: number, question: Question) =>
            currentSum + question.points,
        0
    );
    return pointsTotal;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const published = questions.filter(
        (question: Question): boolean => question.published
    );
    const pointsTotal = published.reduce(
        (currentSum: number, question: Question) =>
            currentSum + question.points,
        0
    );
    return pointsTotal;
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
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return "id,name,options,points,published\n" + questionCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map((question: Question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const published = questions.map(
        (question: Question): Question => ({
            ...question,
            published: true
        })
    );
    return published;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length <= 1) {
        // If there's only one or fewer questions, they must be of the same type
        return true;
    }

    const firstType = questions[0].type;

    // Iterate over the rest of the questions and compare their types to the first question's type
    for (let i = 1; i < questions.length; i++) {
        if (questions[i].type !== firstType) {
            return false;
        }
    }

    // If we made it through the loop without returning false, all the questions have the same type
    return true;
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
    const copyArray = [
        ...questions,
        {
            id: id,
            name: name,
            type: type,
            body: "",
            expected: "",
            options: [],
            points: 1,
            published: false
        }
    ];
    return copyArray;
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
    if (questions.length === 0) {
        return [];
    }

    const newArray = questions.map((question: Question): Question => {
        if (question.id === targetId) {
            return {
                ...question,
                name: newName
            };
        } else {
            return question;
        }
    });
    return newArray;
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
    if (questions.length === 0) {
        return [];
    }

    const newArray = questions.map((question: Question): Question => {
        if (
            question.id === targetId &&
            newQuestionType !== "multiple_choice_question"
        ) {
            return {
                ...question,
                type: newQuestionType,
                options: []
            };
        } else if (question.id === targetId) {
            return {
                ...question,
                type: newQuestionType
            };
        } else {
            return question;
        }
    });
    return newArray;
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
    const newArray = questions.map((question: Question): Question => {
        if (question.id !== targetId) {
            return {
                ...question
            };
        } else {
            if (targetOptionIndex === -1) {
                return {
                    ...question,
                    options: [...question.options, newOption]
                };
            } else {
                const newOptions = [...question.options];
                newOptions[targetOptionIndex] = newOption;

                return {
                    ...question,
                    options: newOptions
                };
            }
        }
    });
    return newArray;
}
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    const copyQuestion = {
        ...oldQuestion,
        name: "Copy of " + oldQuestion.name,
        published: false,
        id: id
    };
    return copyQuestion;
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
    const copyQues = questions.map(
        (ques: Question): Question => ({ ...ques, options: [...ques.options] })
    );
    if (copyQues.length === 0) {
        return [];
    }
    const finding = findQuestion(copyQues, targetId);
    const indexing = copyQues.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    if (finding !== null) {
        const duplicated = duplicateQuestion(newId, finding);
        copyQues.splice(indexing + 1, 0, duplicated);
    }

    return copyQues;
}
