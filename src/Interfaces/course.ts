/* eslint-disable prettier/prettier */
//needs: title, prereqs, semesters offered, credits, department, ID, description, what section of requirement (Ex. "capstone", "core", "lab science"...)

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
    /*random id number for each course*/
    id: number;
    /*Course ID number; eg acisc108*/
    title: string;
    /*Course Name, eg: Introduction to Software Engineering */
    name: string;
    /*Course description*/
    description: string;
    /*number of credits, Eg: 3*/
    credits: number;
    /*semester offered, eg: Spring, Fall, Both*/
    semester: string[]; //made this a string because in the AllCourses json file there is summer, fall, spring, all three, only two, etc. too many variables to account for
    /*Department: eg: College of Engineering */
    department: Department;
    /* prerequesite to take this course - an array course id */
    prereq: string[];
    /* corequesites to take with this course*/
    coreq: string[];
    /*Requirements covered, eg: capstone, core, honors*/
    requirements: string[];
}
