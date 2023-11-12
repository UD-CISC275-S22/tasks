import { Course } from "./course";
export interface Semester {
    title: string;
    totalCredits: number;
    courseList: Course[];
}
