import { Course } from "./course";

export interface Semester {
    id: number;
    title: string;
    year: number;
    //totalCredits: number;
    description: string;
    courseList: Course[];
}
