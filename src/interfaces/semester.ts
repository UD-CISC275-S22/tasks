import { Course } from "./course";

export interface SemesterI {
    season: string;
    name: string;
    year: string;
    courses: Course[];
}

export interface yearI {
    name: string;
    firstsemester: SemesterI;
    secondsemester: SemesterI;
}
