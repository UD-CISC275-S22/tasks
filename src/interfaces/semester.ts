import { Course } from "./course";

export interface Semester {
    season: string;
    name: string;
    year: string;
    courses: Course[];
}
