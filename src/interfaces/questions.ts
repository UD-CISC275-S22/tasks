// interfaces/question.ts
//export type QuestionType = "multiple_choice_question" | "short_answer_question";

export interface Question {
    id: number;
    name: string;
    type: QuestionType;
    body: string;
    expected: string;
    options: string[];
    points: number;
    published: boolean;
}
