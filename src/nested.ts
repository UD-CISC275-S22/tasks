import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const filteredMovies = questions.filter(
        (question: Question): boolean => question.published === true
    );
    return filteredMovies;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (question: Question): boolean =>
            !(
                question.body === "" &&
                question.expected === "" &&
                question.options.length === 0
            )
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
    const foundQuestion = questions.find((question) => question.id === id);
    return foundQuestion != null ? foundQuestion : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const someArr = questions.filter(
        (question: Question): boolean => !(question.id === id)
    );
    return someArr;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const nameArr = questions.map(
        (question: Question): string => question.name
    );
    return nameArr;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalSum = questions.reduce(
        (currentTotal: number, question: Question) =>
            currentTotal + question.points,
        0
    );
    return totalSum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const totalQs = questions.reduce(
        (total: number, question: Question) =>
            question.published === true ? (total += question.points) : total,
        0
    );
    return totalQs;
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
    const newQ = [...questions];
    const questionCSV = newQ
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
    interface Answer {
        questionId: number;
        text: string;
        submitted: boolean;
        correct: boolean;
    }
    const answersArr: Answer[] = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answersArr;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newQ: Question[] = questions.map((question: Question): Question => {
        const newQuestion: Question = { ...question };
        newQuestion.options = [...question.options];
        newQuestion.published = true;

        return newQuestion;
    });
    return newQ;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const firstType = questions[0].type;
    const bool = questions.every(
        (question: Question): boolean => question.type === firstType
    );
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
    const newQuestions: Question[] = [
        ...questions,
        makeBlankQuestion(id, name, type)
    ];
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
    const newQuestions = questions.map((question: Question): Question => {
        // Create a deep copy of the question to avoid modifying the original
        const updatedQuestion: Question = { ...question };

        if (question.id === targetId) {
            updatedQuestion.name = newName;
        }

        return updatedQuestion;
    });

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
    const updatedQuestions = questions.map((question: Question): Question => {
        const abc: Question = { ...question };
        abc.options = [...question.options];
        return abc;
    });
    const newArr = updatedQuestions.map((question: Question): Question => {
        if (
            question.id === targetId &&
            newQuestionType === "short_answer_question"
        ) {
            question.type = newQuestionType;
            question.options = [];
        } else if (question.id === targetId) {
            question.type = newQuestionType;
        }
        return question;
    });
    return newArr;
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
    const updatedQuestions = questions.map((question: Question): Question => {
        const abc: Question = { ...question };
        abc.options = [...question.options];
        return abc;
    });
    const UpdatedOptions = updatedQuestions.map(
        (question: Question): Question => {
            if (question.id === targetId && targetOptionIndex === -1) {
                question.options = [...question.options, newOption];
            } else if (question.id === targetId) {
                question.options.splice(targetOptionIndex, 1, newOption);
            }
            return question;
        }
    );
    return UpdatedOptions;
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
    const updatedQuestions = questions.map((question: Question): Question => {
        const abc: Question = { ...question };
        abc.options = [...question.options];
        return abc;
    });

    // Find the index of the question with targetId
    const index = updatedQuestions.findIndex(
        (question: Question): boolean => question.id === targetId
    );

    if (index !== -1) {
        // Duplicate the question with a new ID
        const oldQuestion = updatedQuestions[index];
        const newQuestion = duplicateQuestion(newId, oldQuestion);

        // Insert the duplicate directly after the original question
        updatedQuestions.splice(index + 1, 0, newQuestion);
    }

    return updatedQuestions;
}
