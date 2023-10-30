import { Semester } from "./semester";

export interface DegreePlan {
    id: number;
    title: string;
    totalCredits: number;
    semestersList: Semester[];
}
