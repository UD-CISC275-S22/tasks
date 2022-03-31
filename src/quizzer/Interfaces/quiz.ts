import { Question } from "./question";
//import { Answer } from "./answer";

export interface Quiz {
    title: string;
    description: string;
    numQuest: number;
    //id: string;
    questions: Question[];
}
