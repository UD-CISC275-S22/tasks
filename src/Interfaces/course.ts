/* eslint-disable prettier/prettier */
//needs: title, prereqs, semesters offered, credits, department, ID, description, what section of requirement (Ex. "capstone", "core", "lab science"...)
export type SemesterOffered = "Fall" | "Spring" | "Both" | "Depends"
/* 
CANR:
CAS
CEOE:
CEHD:
COE:
CHS:
LBE:
BPPA:
Honors:

*/
export type Department = "CANR" | "CAS" | "CEOE" | "CEHD" | "COE" | "CHS" | "LBE" | "BPPA";

export interface Course {
    /*unique identifier for each course*/
    id: number;
    /*Course number, eg CISC275 */
    title: string;
    /*Course Name, eg: Introduction to Software Engineering */
    name: string;
    /*Course description*/
    description: string;
    /*number of credits, Eg: 3*/
    credits: number;
    /*semester offered, eg: Spring, Fall, Both*/
    semester: SemesterOffered;
    /*Department: eg: College of Engineering */
    department: Department;
    /* prerequesite to take this course */
    prereq: Course[];
    /*Requirements covered, eg: capstone, core, honors*/
    requirements: string[];
}
