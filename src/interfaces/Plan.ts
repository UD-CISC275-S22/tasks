import { Semester } from "./Semester";

export interface Plan {
    id: string;
    title: string;
    semesters: Semester[];
}
