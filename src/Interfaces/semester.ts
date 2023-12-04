import { Course } from "./course";

export interface Semester {
    //random id number
    id: string;
    //name of semester
    title: string;
    //notes and additional info added by user
    notes: string;
    //list of courses in semester
    courseList: Course[];
}
