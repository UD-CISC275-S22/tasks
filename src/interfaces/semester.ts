import { Class } from "./course";
export interface Semester {
    title: string;
    totalCredits: number;
    classesList: Class[];
}
