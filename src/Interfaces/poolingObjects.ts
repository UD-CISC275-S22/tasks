import { Course } from "./course";
import { Semester } from "./semester";

export interface poolingObjects {
    courses: Record<string, Record<string, Course>>;
    semesters: Semester[];
}
