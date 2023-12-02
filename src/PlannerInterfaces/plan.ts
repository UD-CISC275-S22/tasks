import { course } from "./course";
import { semester } from "./semester";

export interface plan {
    courses: course[];
    id: string;
    name: string;
    year: number;
    season: string;
    semesters: semester[];
}
