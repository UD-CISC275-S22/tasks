import { Questions } from "./question";
import { Published } from "./published";
import { Answer } from "./answer";

export interface Quiz{
    title: string;
    description: string;
    numQuest: number;
    id: string;
    questions: Questions[];
    published: Published;
}