//import { Answer } from "./answer";
//import { Published } from "./published";

export interface Question {
    name: string;
    body: string;
    type: string;
    points: number;
    ans: string;
    //published: boolean;
    //inputanswer: Answer;
    //not sure if i'm going to need this or not
    //correct: boolean;
}
