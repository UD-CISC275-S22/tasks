/* eslint-disable prettier/prettier */

/* 
CANR:College of Agriculture and Natural Resources
CAS: College of Arts and Sciences
CEOE: College of Earth, Ocean and Environment
CEHD: College of Education and Human Development
COE: College of Engineering
CHS: College of Health Sciences
LBE: 
BPPA: Biden Public POlicy and Administration
Honors:

*/
export type Department =
    | "CANR"
    | "CAS"
    | "CEOE"
    | "CEHD"
    | "COE"
    | "CHS"
    | "LBE"
    | "BPPA";

export interface Course {
    /*id number for each course (0,1,2,etc) for coding purposes*/
    id: number;
    /*Course ID number as seen in UDEL course search; eg CISC108*/
    title: string;
    /*Course Name, eg: Introduction to Software Engineering */
    name: string;
    /*Course description*/
    description: string;
    /*number of credits, Eg: 3*/
    credits: number;
    /*semester offered, eg: Spring, Fall, Both, etc */
    semester: string[]; //made this a string because in the AllCourses json file there is summer, fall, spring, all three, only two, etc. too many variables to account for
    /*Department: eg: College of Engineering */
    // can change into string to get a fix
    department: Department;
    /* prerequesite to take this course - an array of course titles */
    prereq: string[];
    /* corequesites to take with this course - an array of course titles*/
    coreq: string[];
    /*Requirements covered, eg: capstone, core, honors*/
    requirements: string[];
}
