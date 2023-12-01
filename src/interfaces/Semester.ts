import { Course } from "./Course";

export interface Semester {
    id: string;
    season: string;
    year: string;
    courses: Course[];
    skip: boolean;
}
