//look at cisc udel degree requirement examples
//ex. what does the core need, capstone, options for lab science, etc.
import { Semester } from "./semester";

export interface Degree {
    /* degree name */
    name: string;
    semesterSchedule: Semester[];
    /* List of courses required within the degree */
    credits: number;
}
