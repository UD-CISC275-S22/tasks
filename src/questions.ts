import rawQuestions from "./questions.json";
import { Question } from "./interfaces/question";

// Cast JSON data into Question[]
export const SIMPLE_QUESTIONS: Question[] = rawQuestions as Question[];
