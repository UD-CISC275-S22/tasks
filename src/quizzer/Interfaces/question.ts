//import { Answer } from "./answer";
//import { Published } from "./published";
//export type QuestionType = "multiple_choice_question" | "short_answer_question";

export interface Question {
    id: number;
    name: string;
    body: string;
    type: string;
    //for multiple choice questions
    options: string[];
    points: number;
    correctAns: string;
    published: boolean;
}
