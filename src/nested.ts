import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const pub: Question[] = questions.filter(
        (x: Question): boolean => x.published
    );
    return pub;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonempty: Question[] = questions.filter(
        (x: Question): boolean =>
            x.body != "" || x.expected != "" || x.options.length != 0
    );
    return nonempty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const q: Question | undefined = questions.find(
        (x: Question): boolean => x.id === id
    );
    return q === undefined ? null : q;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    questions = questions.filter((q: Question): boolean => q.id != id);
    return questions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const q: string[] = questions.map((que) => que.name);
    return q;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum: number = questions.reduce(
        (s: number, q: Question) => (s += q.points),
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const sum: number = questions.reduce(
        (s: number, q: Question) => (s = q.published ? s + q.points : s),
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
    let str = "id,name,options,points,published\n";
    str += questions
        .map(
            (q: Question): string =>
                `${q.id},${
                    q.name
                },${q.options.length.toString()},${q.points.toString()},${
                    q.published ? "true" : "false"
                }`
        )
        .join("\n");
    return str;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const a: Answer[] = questions.map((q) => ({
        questionId: q.id,
        text: "",
        submitted: false,
        correct: false
    }));
    return a;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const q: Question[] = questions.map((que) => ({ ...que, published: true }));
    return q;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    return questions.reduce(
        (t: boolean, q: Question) => (t = t && q.type === questions[0].type),
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
    questions = [...questions, makeBlankQuestion(id, name, type)];
    return questions;
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
    const q: Question[] = questions.map((q: Question) =>
        q.id === targetId ? { ...q, name: newName } : q
    );
    return q;
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
    const questnum: number = questions.findIndex(
        // I didn't use find because it caused a type error, and since it seems like the question implies that the wanted
        // question will always be in the array, I figured this would be easier than checking that kind of stuff
        (que: Question): boolean => que.id === targetId
    );
    const quest: Question = questions[questnum];
    const o: string[] =
        quest.type === newQuestionType ? [...quest.options] : [];
    const q: Question = { ...quest, type: newQuestionType, options: [...o] };
    const q2: Question[] = questions.map((qq) => (qq === quest ? q : qq));
    return q2;
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
    const num: number = questions.findIndex(
        (que: Question): boolean => que.id === targetId
    );
    let q: Question = {
        ...questions[num],
        options: [...questions[num].options]
    };
    if (targetOptionIndex === -1) {
        q = { ...q, options: [...q.options, newOption] };
    } else {
        const o: string[] = [...q.options];
        o.splice(targetOptionIndex, 1, newOption);
        q = { ...q, options: o };
    }
    const q2: Question[] = questions.map((qq) => (qq.id === targetId ? q : qq));
    return q2;
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
    const q2: Question[] = [...questions];
    const questnum: number = questions.findIndex(
        (que: Question): boolean => que.id === targetId
    );
    const q: Question = duplicateQuestion(newId, questions[questnum]);
    q2.splice(questnum + 1, 0, q);
    return q2;
}
