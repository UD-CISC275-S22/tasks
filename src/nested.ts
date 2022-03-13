import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedquestion = questions.filter(
        (questions: Question): boolean => questions.published
    );
    return publishedquestion;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.d
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const newquestion = questions.filter(
        (question: Question): boolean =>
            !(
                question.body == "" &&
                question.expected == "" &&
                question.options.length == 0
            )
    );
    return newquestion;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const quest = questions.find(
        (question: Question): boolean => question.id == id
    );
    if (quest) {
        return quest;
    } else if (!quest) {
        return null;
    } else {
        return null;
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const Idquestion = questions.filter(
        (questions: Question): boolean => questions.id != id
    );
    return Idquestion;
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
    const total = questions.reduce(
        (n: number, question: Question) => question.points + n,
        0
    );
    return total;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedquestion = questions.filter(
        (questions: Question): boolean => questions.published
    );
    const total = publishedquestion.reduce(
        (n: number, question: Question) => question.points + n,
        0
    );
    return total;
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
    const csv = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    const final = "id,name,options,points,published\n" + csv;
    return final;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    interface Answers {
        questionId: number;
        text: "";
        submitted: false;
        correct: false;
    }
    const Ans: Answers[] = questions.map(
        (question: Question): Answers => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return Ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const published = questions.map(
        (questions: Question): Question => ({ ...questions, published: true })
    );
    return published;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const first = questions.filter(
        (questions: Question): boolean =>
            questions.type == "multiple_choice_question"
    );
    const second = questions.filter(
        (questions: Question): boolean =>
            questions.type == "short_answer_question"
    );
    const length_first = first.length;
    const length_second = second.length;
    if (length_first == questions.length || length_second == questions.length) {
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
    const question = [
        ...questions,
        {
            id: id,
            name,
            type,
            body: "",
            expected: "",
            options: [],
            points: 1,
            published: false
        }
    ];
    return question;
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
    const newtemp = questions.map(
        (question: Question): Question => ({
            ...question,
            name: question.id === targetId ? newName : question.name
        })
    );
    return newtemp;
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
    const first = questions.map(
        (question: Question): Question => ({
            ...question,
            type: question.id == targetId ? newQuestionType : question.type
        })
    );
    const finalchange = first.map(
        (question: Question): Question => ({
            ...question,
            options:
                question.type == newQuestionType &&
                question.type == "short_answer_question"
                    ? []
                    : question.options
        })
    );
    return finalchange;
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
function helper(
    options: string[],
    targetOptionIndex: number,
    newOption: string
) {
    const temp = [...options];
    const check = targetOptionIndex == -1;
    if (check) {
        temp.splice(options.length, 0, newOption);
    } else {
        temp.splice(targetOptionIndex, 1, newOption);
    }
    return temp;
}
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const new_options = questions.map(
        (question: Question): Question => ({
            ...question,
            options:
                question.id == targetId
                    ? helper(question.options, targetOptionIndex, newOption)
                    : question.options
        })
    );
    return new_options;
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
    const temp = [...questions];
    const index: number = temp.findIndex(
        (question: Question): boolean => question.id == targetId
    );
    temp.splice(index + 1, 0, {
        ...temp[index],
        id: newId,
        name: "Copy of " + temp[index].name
    });
    return temp;
}
