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
    //will be used to collect points
    correct: boolean;
    //will be used to determine if the question is answered or not
    answered: boolean;
    //will be used to hold the answer
    inputAns: string;
}
