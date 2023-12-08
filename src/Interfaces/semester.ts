import { Course } from "./course";

export interface Semester {
    //Offered session and year
    id: string;
    //name of semester
    title: string;
    //notes and additional info added by user
    notes: string;
    //list of courses in semester
    courseList: Course[];
}
