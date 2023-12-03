import { Course } from "./course";

export interface Semester {
    //random id number
    id: number;
    //name of semester
    title: string;
    //year of occuring semester
    year: string;
    //totalCredits: number;
    //notes and additional info added by user
    notes: string;
    //list of courses in semester
    courseList: Course[];
}
