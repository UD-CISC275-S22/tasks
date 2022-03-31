import { Answer } from "./answer";
import { Published } from "./published";

export interface Question {
    name: string;
    body: string;
    points: number;
    published: Published;
    inputanswer: Answer;
    type: string;
    //not sure if i'm going to need this or not
    correctAns: string;
    correct: boolean;
}
