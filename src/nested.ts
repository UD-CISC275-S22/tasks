import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const justPublished: Question[] = questions.filter(
        (quest: Question): boolean => quest.published === true
    );
    return justPublished;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQ: Question[] = questions.filter(
        (quest: Question): boolean =>
            quest.body !== "" ||
            quest.expected !== "" ||
            quest.options.length > 0
    );

    return nonEmptyQ;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const qSearched = questions.filter(
        (quest: Question): boolean => quest.id === id
    ); //the length of this array will determine if the question was found or not
    if (qSearched.length === 1) {
        //if it has a length of 1 it means that it was found
        return qSearched[0];
    }
    return null; //if its empty it means it wasn't found
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const qSearched: Question[] = questions.filter(
        (quest: Question): boolean => quest.id === id
    ); //this array will contain the question we want removed

    const qRemoved: Question[] = questions.filter(
        //this will create an array of question without the one we want removed
        (quest: Question): boolean => quest.id !== qSearched[0].id
    );
    return qRemoved;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names: string[] = questions.map(
        (quest: Question): string => quest.name
    );
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum: number = questions.reduce(
        (currentTotal: number, quest: Question) => currentTotal + quest.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const justPublished: Question[] = questions.filter(
        (quest: Question): boolean => quest.published === true
    );
    //creates an array that only contains questions that are published
    return sumPoints(justPublished);
    //sum the points of the published ones
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
    const questionsCSV = questions
        .map(
            (quest: Question): string =>
                `${quest.id},${quest.name},${quest.options.length},${quest.points},${quest.published}`
        )
        .join("\n");
    const header = "id,name,options,points,published\n";
    return header + questionsCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers: Answer[] = questions.map(
        (quest: Question): Answer => ({
            questionId: quest.id,
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
    const published: Question[] = questions.map(
        (quest: Question): Question => ({
            ...quest,
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
    const allMultipleChoice: boolean = questions.every(
        (quest: Question): boolean => quest.type === "multiple_choice_question"
    );
    const allFreeResponse: boolean = questions.every(
        (quest: Question): boolean => quest.type === "short_answer_question"
    );
    if (allMultipleChoice === true || allFreeResponse === true) {
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
    const blankQuestion: Question = makeBlankQuestion(id, name, type);

    const deepQuestCopy: Question[] = questions.map(
        (quest: Question): Question => ({
            ...quest,
            options: [...quest.options]
        })
    );

    const addedBlank: Question[] = [...deepQuestCopy, blankQuestion]; //adds blank question to the copied array

    return addedBlank;
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
    // console.log(newName);
    // console.log(targetId);
    // eslint-disable-next-line prettier/prettier
    //this function will check to see if the current question has the targetId
    //if it does it will return a copy of that question, with the name field altered
    //otherwise it will just return the question unaltered
    function rename(quest: Question, targetId: number, newName: string) {
        if (quest.id === targetId) {
            const alteredQuest: Question = {
                ...quest,
                name: newName,
                options: [...quest.options]
            };
            return alteredQuest; //if it had the target id
        } else {
            return quest; //if it did not have the target id
        }
    }

    const targetAltered: Question[] = questions.map(
        (quest: Question): Question => ({
            ...rename(quest, targetId, newName) //rename function used here to check for targetID
        })
    );
    //console.log(targetAltered);
    return targetAltered;
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
    function alterations( //helper function to assist with changes
        quest: Question,
        targetId: number,
        newQuestionType: QuestionType
    ) {
        const deepQuestCopy: Question = {
            //make copy of current question
            ...quest,
            options: [...quest.options]
        };
        if (
            //checks if it has the right id and if the question no longer be a multiple choice question
            deepQuestCopy.id === targetId &&
            newQuestionType !== "multiple_choice_question"
        ) {
            const alteredCopy: Question = {
                ...quest,
                type: newQuestionType,
                options: []
            };
            return alteredCopy;
            // eslint-disable-next-line brace-style
        }
        // eslint-disable-next-line prettier/prettier
        else if (
            deepQuestCopy.id === targetId &&
            newQuestionType === "multiple_choice_question"
        ) {
            //its the targetID, but the options array doesnt need to be altered
            const alteredCopy: Question = {
                ...quest,
                type: newQuestionType,
                options: [...deepQuestCopy.options]
            };
            return alteredCopy;
        } else {
            //its not the targetId
            return deepQuestCopy;
        }
    } //helper function scope
    const alteredCopy: Question[] = questions.map(
        (quest: Question): Question => ({
            ...alterations(quest, targetId, newQuestionType)
        })
    );
    return alteredCopy;
} //actual function scope

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
    function alterations( //helper function to assist with changes
        quest: Question,
        targetId: number,
        targetOptionIndex: number,
        newOption: string
    ) {
        const deepQuestCopy: Question = {
            //make copy of current question
            ...quest,
            options: [...quest.options]
        };
        if (
            //checks if it has the right id and if the new option is being added to the end of the list
            deepQuestCopy.id === targetId &&
            targetOptionIndex === -1
        ) {
            const alteredCopy: Question = {
                ...quest,
                options: [...deepQuestCopy.options, newOption]
            };
            return alteredCopy;
            // eslint-disable-next-line brace-style
        }
        // eslint-disable-next-line prettier/prettier
        else if (deepQuestCopy.id === targetId && targetOptionIndex !== -1) {
            //its the targetID, but the new string in options will replace the one at that target index
            const alteredCopy: Question = {
                ...quest,
                options: [...deepQuestCopy.options]
            };
            alteredCopy.options[targetOptionIndex] = newOption;
            return alteredCopy;
        } else {
            //its not the targetId
            return deepQuestCopy;
        }
    }
    const optionInserted: Question[] = questions.map(
        (quest: Question): Question => ({
            ...alterations(quest, targetId, targetOptionIndex, newOption)
        })
    );
    return optionInserted;
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
    const targetIndex: number = questions.findIndex(
        //get the index of the target question
        (quest: Question): boolean => quest.id === targetId
    );
    console.log("This is target index: " + targetIndex);
    const duplicateOfTarget: Question = duplicateQuestion(
        //create duplicate of targetQuestion
        newId,
        questions[targetIndex]
    );
    const qCopied: Question[] = questions.map(
        (quest: Question): Question => ({
            ...quest,
            options: [...quest.options]
        })
    );
    qCopied.splice(targetIndex + 1, 0, duplicateOfTarget);
    console.log(qCopied);
    return qCopied;
}
