import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const fin = questions.filter((x: Question): boolean => x.published);
    return fin;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const fin = questions.filter(
        (x: Question): boolean =>
            x.body.length > 0 || x.expected.length > 0 || x.options.length > 0
    );
    return fin;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const fin = questions.filter((x: Question): boolean => x.id === id);
    if (fin.length !== 0) {
        return fin[0];
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const fin = questions.filter((x: Question): boolean => x.id !== id);
    return fin;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const fin = questions.map((x: Question): string => (x = x.name));
    return fin;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let fin = 0;
    questions.map((x: Question): number => (fin += x.points));
    return fin;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let fin = 0;
    questions.map((x: Question): number =>
        x.published ? (fin += x.points) : (fin += 0)
    );
    return fin;
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
    const first = "id,name,options,points,published\n";
    const fin = questions
        .map(
            (ques: Question): string =>
                ques.id.toString() +
                "," +
                ques.name.toString() +
                "," +
                ques.options.length.toString() +
                "," +
                ques.points.toString() +
                "," +
                ques.published.toString()
        )
        .join("\n");
    return first + fin;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const fin = questions.map(
        (x: Question): Answer => ({
            questionId: x.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return fin;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (x: Question): Question => ({ ...x, published: true })
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let fin = true;
    if (questions.length > 0) {
        const theType = questions[0].type;
        fin = questions.every((x: Question): boolean => x.type === theType);
    }
    return fin;
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
    const fin = [...questions];
    fin.push(newQ);
    return fin;
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
    let fin = questions.map((x: Question): Question => ({ ...x }));
    const match = fin.filter((x: Question): boolean => x.id === targetId)[0];
    const match2 = { ...match, name: newName };
    fin = questions.map(
        (x: Question): Question => (x.id === match2.id ? match2 : x)
    );

    return fin;
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
    let fin = questions.map((x: Question): Question => ({ ...x }));
    const match = fin.filter((x: Question): boolean => x.id === targetId)[0];
    let match2 = { ...match, type: newQuestionType };
    if (match2.type !== "multiple_choice_question") {
        match2 = { ...match2, options: [] };
    }
    fin = questions.map(
        (x: Question): Question => (x.id === match2.id ? match2 : x)
    );

    return fin;
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
    const fin = questions.map((x: Question): Question => {
        if (x.id !== targetId) {
            return x;
        }
        let newOptions: string[];
        if (targetOptionIndex === -1) {
            newOptions = [...x.options, newOption];
        } else {
            newOptions = [
                ...x.options.slice(0, targetOptionIndex),
                newOption,
                ...x.options.slice(targetOptionIndex + 1)
            ];
        }
        return { ...x, options: newOptions };
    });
    return fin;
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
    const fin: Question[] = questions.map(
        (x: Question): Question => ({ ...x })
    );
    const spot = questions.findIndex(
        (x: Question): boolean => x.id === targetId
    );
    const dupe = fin.find((x: Question): boolean => x.id === targetId);
    if (dupe) {
        const temp = questions.slice(0, spot + 1);
        temp.push(duplicateQuestion(newId, dupe));
        const newT = temp.concat(fin.slice(spot + 1, fin.length + 1));
        return newT;
    }
    return [];
}
