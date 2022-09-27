import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const questions_new = questions.map((question: Question) => ({
        ...question
    }));
    const questions_published = questions_new.filter(
        (question: Question): boolean => question.published
    );
    return questions_published;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const questions_nonempty = questions_new.filter(
        (question: Question): boolean =>
            !(
                question.body === "" &&
                question.expected === "" &&
                question.options.length === 0
            )
    );
    return questions_nonempty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const questions_id = questions_new.filter(
        (question: Question): boolean => question.id === id
    );
    if (questions_id.length === 0) {
        return null;
    } else {
        return questions_id[0];
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const questions_id = questions_new.filter(
        (question: Question): boolean => question.id !== id
    );
    return questions_id;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const question_names = questions_new.map((question: Question): string =>
        JSON.stringify(question.name)
    );
    const question_names_sliced = question_names.map((str: string): string =>
        str.slice(1, str.length - 1)
    );
    return question_names_sliced;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const questions_points = questions_new.reduce(
        (sum: number, question: Question) => sum + question.points,
        0
    );
    return questions_points;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const questions_published = getPublishedQuestions(questions_new);
    const sum_points = sumPoints(questions_published);
    return sum_points;
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
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const questions_csv = questions_new.reduce(
        (csv: string, question: Question) =>
            csv +
            question.id +
            "," +
            question.name +
            "," +
            question.options.length +
            "," +
            question.points +
            "," +
            question.published +
            "\n",
        "id,name,options,points,published\n"
    );
    return questions_csv.trim();
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
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
    const questions_published = questions.map((question: Question) => ({
        ...question,
        published: true
    }));
    return questions_published;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length < 2) {
        return true;
    }
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const t = questions_new[0].type;
    const questions_filt = questions_new.filter(
        (question: Question): boolean => question.type === t
    );
    let b = false;
    if (questions_filt.length === questions_new.length) {
        b = true;
    }
    return b;
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
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const new_question = makeBlankQuestion(id, name, type);
    questions_new.push(new_question);
    return questions_new;
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
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const index = questions_new.findIndex(
        (question: Question) => question.id == targetId
    );
    questions_new[index].name = newName;
    return questions_new;
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
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const index = questions_new.findIndex(
        (question: Question) => question.id == targetId
    );
    if (
        newQuestionType !== "multiple_choice_question" &&
        questions_new[index].type === "multiple_choice_question"
    ) {
        questions_new[index].options = [];
    }
    questions_new[index].type = newQuestionType;
    return questions_new;
}

/** Duplicate question without altering it */
export function duplicateQuestion_noAlt(oldQuestion: Question): Question {
    const question_new = {
        ...oldQuestion
    };
    return question_new;
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
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const index = questions_new.findIndex(
        (question: Question) => question.id == targetId
    );
    const question_duplicate = duplicateQuestion_noAlt(questions_new[index]);
    if (targetOptionIndex === -1) {
        question_duplicate.options.push(newOption);
    } else {
        const options_before = question_duplicate.options.slice(
            0,
            targetOptionIndex
        );
        const options_after = question_duplicate.options.slice(
            targetOptionIndex + 1,
            question_duplicate.options.length
        );
        options_before.push(newOption);
        const options_new = options_before.concat(options_after);
        question_duplicate.options = options_new;
    }
    const questions_before = questions_new.slice(0, index);
    const questions_after = questions_new.slice(
        index + 1,
        questions_new.length
    );
    questions_before.push(question_duplicate);
    const questions_final = questions_before.concat(questions_after);
    return questions_final;
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
    const questions_new = questions.map((question: Question) => ({
        ...question,
        options: [...question.options]
    }));
    const index = questions_new.findIndex(
        (question: Question) => question.id == targetId
    );
    const question_duplicate = duplicateQuestion(newId, questions_new[index]);
    const questions_before = questions_new.slice(0, index + 1);
    const questions_after = questions_new.slice(
        index + 1,
        questions_new.length
    );
    questions_before.push(question_duplicate);
    const questions_final = questions_before.concat(questions_after);
    return questions_final;
}
