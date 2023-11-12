import { Course } from "./course";
export interface Semester {
    title: string;
    id: number;
    totalCredits: number;
    courses: Course[];
}
