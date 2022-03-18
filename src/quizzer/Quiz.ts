import { Question } from "./Question";

export interface Quiz {
    title: string;
    description: string;
    questions: Question[];
}
