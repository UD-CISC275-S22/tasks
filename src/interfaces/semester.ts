import { Course } from "./course";

export interface SemesterI {
    season: string;
    name: string;
    year: string;
    courses: Course[];
}
