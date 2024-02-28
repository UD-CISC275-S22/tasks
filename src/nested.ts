import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => question.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question) =>
            question.body.trim() !== "" ||
            question.expected.trim() !== "" ||
            question.options.length > 0
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    return questions.find((questions) => questions.id === id) || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((question) => question.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question) => question.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce((total, question) => total + question.points, 0);
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const published = questions.filter((question) => question.published);
    return published.reduce((total, question) => total + question.points, 0);
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
    const csv = "id,name,options,points,published";
    //rows for each specific question
    const csvRows = questions.map((question) => {
        const optionsCount = question.options.length;
        const publishedVal = question.published ? "true" : "false";
        return `${question.id},${question.name},${optionsCount},${question.points},${publishedVal}`;
    });
    return [csv, ...csvRows].join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => ({
        ...question,
        published: true
    }));
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length > 0) {
        const first = questions[0].type;
        return questions.every((question) => question.type === first);
    } else {
        return true;
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
    const newQ = makeBlankQuestion(id, name, type);
    return questions.concat(newQ);
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
    return questions.map((question) => {
        if (question.id === targetId) {
            return { ...question, name: newName };
        } else {
            return question;
        }
    });
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
    return questions.map((question) => {
        if (question.id === targetId) {
            // Create a new question object with the updated type
            const updatedQuestion: Question = {
                ...question,
                type: newQuestionType
            };

            // If the new question type is not multiple_choice_question, clear the options array
            if (newQuestionType !== "multiple_choice_question") {
                updatedQuestion.options = [];
            }

            return updatedQuestion;
        } else {
            return question; // Return other questions unchanged
        }
    });
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
    const index = questions.findIndex((question) => question.id === targetId);
    if (index === -1) {
        return questions;
    }

    // copy array
    const updatedQuestions = questions.map((question, i) => {
        if (i !== index) {
            //non target questions
            return question;
        }

        // Clone the target question and update its options array
        const updatedOptions = [...question.options];
        if (targetOptionIndex === -1) {
            // If targetOptionIndex is -1, add the new option to the end of the options array
            updatedOptions.push(newOption);
        } else {
            // if not -1, replace the existing option at the targetOptionIndex with newOption
            updatedOptions[targetOptionIndex] = newOption;
        }

        // Return the cloned question with the updated options
        return { ...question, options: updatedOptions };
    });

    return updatedQuestions;
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
    const index = questions.findIndex((question) => question.id === targetId);
    if (index === -1) {
        // If the target question with the specified ID is not found, return the original array
        return questions;
    }
    const duplicate = duplicateQuestion(newId, questions[index]);

    const newArr = [
        ...questions.slice(0, index + 1),
        duplicate,
        ...questions.slice(index + 1)
    ];
    return newArr;
}
