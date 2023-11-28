import { Course } from "./course";
export type seasonT = "winter"|"spring"|"summer"|"fall";
export interface SemesterI {
    season: seasonT;
    name: string;
    year: string;
    courses: Course[];
}

export interface yearI {
    name: string;
    winter:null|SemesterI;
    spring:null|SemesterI;
    summer:null|SemesterI;
    fall:null|SemesterI;
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