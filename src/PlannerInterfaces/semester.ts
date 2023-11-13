import { Course } from "./Course";

export interface Semester {
    id: string;
    name: string;
    year: number;
    courses: Course[];
    season: string;
}
