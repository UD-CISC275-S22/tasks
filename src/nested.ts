import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const published = deepCopy.filter(
        (quest: Question): boolean => quest.published === true
    );
    return published;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const nonEmpty = deepCopy.filter(
        (quest: Question): boolean =>
            quest.body !== "" ||
            quest.expected !== "" ||
            quest.options.length !== 0
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
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const ids = deepCopy.map((quest: Question): number => quest.id);
    const givenID = ids.find((givenID: number): boolean => givenID === id);
    const given = deepCopy.find(
        (matchingQ: Question): boolean => matchingQ.id === givenID
    );
    if (given) {
        return given;
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const givenID = deepCopy.filter(
        (quest: Question): boolean => quest.id !== id
    );
    return givenID;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const names = deepCopy.map((quest: Question): string => quest.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (currTotal: number, quest: Question) => currTotal + quest.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const published = deepCopy.filter(
        (quest: Question): boolean => quest.published === true
    );
    const sum = published.reduce(
        (currTotal: number, quest: Question) => currTotal + quest.points,
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
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const str = deepCopy.map(
        (quest: Question): string =>
            quest.id +
            "," +
            quest.name +
            "," +
            quest.options.length +
            "," +
            quest.points +
            "," +
            quest.published
    );
    return "id,name,options,points,published" + "\n" + str.join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const answers: Answer[] = deepCopy.map((quest: Question) => ({
        questionId: quest.id,
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
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const publish = deepCopy.map((quest: Question): Question => {
        quest.published = true;
        //"return quest" from chatGPT
        return quest;
    });
    return publish;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const type = deepCopy[0].type;
    const filtered = deepCopy.filter(
        (quest: Question): boolean => quest.type === type
    );
    if (deepCopy.length === filtered.length) {
        return true;
    }
    return false;
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
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const q = makeBlankQuestion(id, name, type);
    deepCopy.push(q);
    return deepCopy;
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
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const newNam = deepCopy.map((quest: Question) => {
        if (quest.id === targetId) {
            return { ...quest, name: newName };
        } else {
            return quest;
        }
    });
    return newNam;
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
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const newType = deepCopy.map((quest: Question) => {
        if (quest.id === targetId) {
            if (
                newQuestionType !== "multiple_choice_question" &&
                quest.type === "multiple_choice_question"
            ) {
                return { ...quest, type: newQuestionType, options: [] };
            }
            return { ...quest, type: newQuestionType };
        } else {
            return quest;
        }
    });
    return newType;
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
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const newOps = deepCopy.map((quest: Question) => {
        if (quest.id === targetId) {
            if (targetOptionIndex === -1) {
                return { ...quest, options: [...quest.options, newOption] };
            } else {
                const copiedOps = [...quest.options];
                copiedOps.splice(targetOptionIndex, 1, newOption);
                return { ...quest, options: copiedOps };
            }
        } else {
            return quest;
        }
    });
    return newOps;
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
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const index = deepCopy.findIndex(
        (q: Question): boolean => q.id === targetId
    );
    const doubled = deepCopy.map((q: Question): Question => ({ ...q }));
    if (index !== -1) {
        const dupe: Question = duplicateQuestion(newId, deepCopy[index]);
        doubled.splice(index + 1, 0, dupe);
        return doubled;
    }
    return deepCopy;
}
