import { Course } from "./course";
import { Semester } from "./semester";

export interface PoolingObjects {
    courses: Record<string, Record<string, Course>>;
    semesters: Semester[];
}
