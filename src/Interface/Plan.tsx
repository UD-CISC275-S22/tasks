import { semester } from "./semester";

export interface Plan {
    id: number;
    name: string;
    semesters: semester[];
}
