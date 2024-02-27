import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => question.published);
}

export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question) =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
}

export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    return questions.find((question) => question.id === id) || null;
}

export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((question) => question.id !== id);
}

export function getNames(questions: Question[]): string[] {
    return questions.map((question) => question.name);
}

export function sumPoints(questions: Question[]): number {
    return questions.reduce((total, question) => total + question.points, 0);
}

export function sumPublishedPoints(questions: Question[]): number {
    return questions.reduce((total, question) => {
        if (question.published) {
            return total + question.points;
        }
        return total;
    }, 0);
}

export function toCSV(questions: Question[]): string {
    const headers = "id,name,options,points,published\n";
    const rows = questions.map((question) => {
        const optionsString = question.options
            ? question.options.join(",")
            : ""; // Convert options array to string
        return `${question.id},${question.name},${optionsString},${question.points},${question.published}\n`;
    });
    return headers + rows.join("");
}

export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
}

export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => ({ ...question, published: true }));
}

export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) return true;
    const firstType = questions[0].type;
    return questions.every((question) => question.type === firstType);
}

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion: Question = {
        id,
        name,
        type,
        body: "",
        expected: "",
        options: type === QuestionType.Multiple_Choice_Question ? [] : null, // Adjust options handling
        points: 1,
        published: false
    };
    return [...questions, newQuestion];
}

export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map((question) =>
        question.id === targetId ? { ...question, name: newName } : question
    );
}

export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            const options =
                newQuestionType === "multiple_choice_question"
                    ? question.options
                    : [];
            return { ...question, type: newQuestionType, options };
        }
        return question;
    });
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            const options = [...question.options];
            if (targetOptionIndex === -1) {
                options.push(newOption);
            } else {
                options[targetOptionIndex] = newOption;
            }
            return { ...question, options };
        }
        return question;
    });
}

export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const targetIndex = questions.findIndex(
        (question) => question.id === targetId
    );
    if (targetIndex === -1) return questions;

    const targetQuestion = questions[targetIndex];
    const duplicateQuestion = {
        ...targetQuestion,
        id: newId,
        name: `Copy of ${targetQuestion.name}`
    };
    const updatedQuestions = [...questions];
    updatedQuestions.splice(targetIndex + 1, 0, duplicateQuestion);
    return updatedQuestions;
}
