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
    department: string;
    /* prerequesite to take this course - an array of course titles */
    prereq: string[];
    /* corequesites to take with this course - an array of course titles*/
    coreq: string[];
    /*Requirements covered, eg: capstone, core, honors*/
    requirements: string[];
}
