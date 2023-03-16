import { equal } from "assert";
import { type } from "os";
import { text } from "stream/consumers";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let publishedQues = questions.map(
        (ques: Question): Question => ({ ...ques })
    );

    publishedQues = publishedQues.filter(
        (ques: Question): boolean => ques.published
    );
    return publishedQues;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const newQues = questions.map((ques: Question): Question => ({ ...ques }));
    const nonEmpty = newQues.filter(
        (ques: Question): boolean =>
            ques.body !== "" ||
            ques.expected !== "" ||
            ques.options.length !== 0
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const newQues = questions.map((ques: Question): Question => ({ ...ques }));
    const copyID = newQues.find((ques: Question): boolean => ques.id == id);
    return copyID === undefined ? null : copyID;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const newQues = questions.map((ques: Question): Question => ({ ...ques }));
    const notID = newQues.filter((ques: Question): boolean => ques.id != id);
    return notID;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const newQues = questions.map((ques: Question): Question => ({ ...ques }));
    const namesList = newQues.map((ques: Question): string => ques.name);
    return namesList;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const newQues = questions.map((ques: Question): Question => ({ ...ques }));
    const totalPoints = newQues.reduce(
        (current: number, ques: Question) => current + ques.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const newQues = questions.map((ques: Question): Question => ({ ...ques }));
    const publishedList = getPublishedQuestions(newQues);
    return sumPoints(publishedList);
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
    const newQues = questions.map(
        (ques: Question): Question => ({ ...ques, options: [...ques.options] })
    );
    const questionsCSV =
        "\n" +
        newQues
            .map(
                (ques: Question): string =>
                    // Convenient String Interpolation; could have just used + operator too
                    `${ques.id},${ques.name},${ques.options.length},${ques.points},${ques.published}`
            )
            .join("\n");
    return ("id,name,options,points,published" + questionsCSV).trim();
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const newQues = questions.map(
        (ques: Question): Question => ({ ...ques, options: [...ques.options] })
    );
    const matching: Answer[] = newQues.map(
        (value: Question): Answer => ({
            questionId: value.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return matching;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newQues = questions.map(
        (ques: Question): Question => ({ ...ques, options: [...ques.options] })
    );
    const updated = newQues.map(
        (val: Question): Question => ({ ...val, published: true })
    );
    return updated;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const matchType = questions[0].type;
    return questions.reduce(
        (prevType: boolean, newQues: Question): boolean =>
            prevType && newQues.type === matchType,
        true
    );
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
    // could not get it to work while calling makeBlankQuestion
    const newQues = questions.map(
        (ques: Question): Question => ({ ...ques, options: [...ques.options] })
    );
    return [
        ...newQues,
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
    const copyQues = questions.map(
        (ques: Question): Question => ({ ...ques, options: [...ques.options] })
    );
    if (copyQues.length === 0) {
        return [];
    }
    const newQues = copyQues.map(
        (ques: Question): Question =>
            ques.id === targetId ? { ...ques, name: newName } : ques
    );
    return newQues;
    //const found = findQuestion(questions, targetId);
    //return found !== null ? [...newQues, { ...found, name: newName }] : newQues;
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
    const copyQues = questions.map(
        (ques: Question): Question => ({ ...ques, options: [...ques.options] })
    );
    if (copyQues.length === 0) {
        return [];
    }
    const newQues = copyQues.map((ques: Question): Question => {
        if (
            ques.id === targetId &&
            newQuestionType != "multiple_choice_question"
        ) {
            return { ...ques, type: newQuestionType, options: [] };
        } else if (ques.id === targetId) {
            return { ...ques, type: newQuestionType };
        } else {
            return ques;
        }
    });
    return newQues;
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
    const copyQues = questions.map(
        (ques: Question): Question => ({ ...ques, options: [...ques.options] })
    );
    //find targetID question
    const newQues = copyQues.map((question: Question): Question => {
        if (question.id !== targetId) {
            return { ...question };
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
    return newQues;
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

    // let newQues = copyQues.map(
    //     (qst: Question): Question =>
    //         qst.id === targetId
    //             ? {...copyQues, copyQues.splice(indexing, 0, duplicateQuestion(newId, qst))}
    //             : { ...qst }
    // );

    return copyQues;
}
