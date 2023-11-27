import { Course } from "./course";

export interface SemesterI {
    season: string;
    name: string;
    year: string;
    courses: Course[];
}

export interface yearI {
    name: string;
    firstsemester: SemesterI;
    secondsemester: SemesterI;
}

export interface CoursePlan {
    name: string;
    years:yearI[];
}

export interface TotalDB {
    Courseplans:CoursePlan[];
}

export interface dbMangement {
    dataset: TotalDB;
    stateSetter: (DB: TotalDB) => void;
}