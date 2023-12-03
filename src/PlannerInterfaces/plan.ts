import { semester } from "./semester";

export interface plan {
    id: string;
    name: string;
    semesters: semester[];
}
