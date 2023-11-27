import { Course } from "./course";

export interface SemesterI {
    season: "Winter"|"Spring"|"Summer"|"Fall"
    name: string;
    year: string;
    courses: Course[];
}

export interface yearI {
    name: string;
    winter:null|SemesterI;
    spring:null|SemesterI;
    summer:null|SemesterI;
    Fall:null|SemesterI;
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
