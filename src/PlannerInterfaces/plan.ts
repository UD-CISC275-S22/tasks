import { Semester } from "./Semester";

export interface Plan {
    id: string;
    name: string;
    semesters: Semester[];
}
