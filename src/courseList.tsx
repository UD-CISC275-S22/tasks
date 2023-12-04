import { Course } from "./interfaces/course";

//Only viable for degree if it is first CISC course taken
export const CISC101: Course = {
    title: "Principles of Computing",
    courseCode: "101",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//For credit, must be taken before 106/108 (not required)
export const CISC103: Course = {
    title: "Introduction to Computer Science with Web Applications",
    courseCode: "103",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit in both 106 and 108 (108 reccommended)
export const CISC106: Course = {
    title: "General Computer Science for Engineers",
    courseCode: "106",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["MATH241"],
    courseDescription: ""
};

//Cant get credit in both 106 and 108 (108 reccommended)
export const CISC108: Course = {
    title: "Introduction to Computer Science I",
    courseCode: "108",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["MATH115" || "MATH117" || "Higher MATH"],
    courseDescription: ""
};

export const CISC181: Course = {
    title: "Introduction to Computer Science II",
    courseCode: "181",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC108" || "CISC106"],
    courseCoreq: ["MATH221" || "MATH241" || "Higher MATH"],
    courseDescription: ""
};

export const CISC210: Course = {
    title: "Introduction to Systems Programming",
    courseCode: "210",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC106" || "CISC108"],
    courseCoreq: ["MATH221" || "MATH241" || "Higher MATH"],
    courseDescription: ""
};

export const CISC220: Course = {
    title: "Data Structures",
    courseCode: "220",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC181"],
    courseCoreq: ["MATH210" || "MATH241"],
    courseDescription: ""
};

//Cant receive credit for both CISC250 and CISC450
export const CISC250: Course = {
    title: "Business Telecommunication Networks",
    courseCode: "250",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC181"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC260: Course = {
    title: "Machine Organization and Assembly Language",
    courseCode: "260",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC181"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC275: Course = {
    title: "Introduction to Software Engineering",
    courseCode: "275",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC303: Course = {
    title: "Automata Theory",
    courseCode: "303",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["MATH210", "CISC220"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC304: Course = {
    title: "Logic and Programming",
    courseCode: "304",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["MATH210", "CISC220"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC320: Course = {
    title: "Introduction to Algorithms",
    courseCode: "320",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["MATH210", "CISC220"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant be used as technical elective for CISC majors
export const CISC355: Course = {
    title: "Computers, Ethics and Society",
    courseCode: "355",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Junior or Senior standing, cant be used as technical elective for CISC majors
export const CISC356: Course = {
    title: "Intellectual Property in the Digital Age",
    courseCode: "356",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC360: Course = {
    title: "Computer Architecture",
    courseCode: "360",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220", "CISC260"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//CISC360 recommended
export const CISC361: Course = {
    title: "Operating Systems",
    courseCode: "361",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220", "CISC260" || "CPEG222"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC364: Course = {
    title: "System Security",
    courseCode: "364",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC361"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//between 1-6 credits
export const CISC366: Course = {
    title: "Independent Study",
    courseCode: "366",
    credits: 6,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC372: Course = {
    title: "Parallel Programming",
    courseCode: "372",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC374: Course = {
    title: "Educational Game Development",
    courseCode: "374",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC401 and CISC601
export const CISC401: Course = {
    title: "Elements of the Theory of Computation",
    courseCode: "401",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC303"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC404 and CISC604
export const CISC404: Course = {
    title: "Logic in Computer Science",
    courseCode: "404",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC304"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC409 and CISC609
export const CISC409: Course = {
    title: "Topics in Theoretical Computer Science",
    courseCode: "409",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC401"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Crosslisted as MATH426
export const CISC410: Course = {
    title: "Introduction to Numerical Analysis & Algorithmic Computation",
    courseCode: "410",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["MATH349" || "MATH341" || "MATH351", "CISC106" || "CISC108"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Crosslisted as MATH428
export const CISC411: Course = {
    title: "Algorithmic and Numerical Solution of Differential Equations",
    courseCode: "411",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["MATH426" || "CISC410"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC616/CPEG614 and CISC414
export const CISC414: Course = {
    title: "Formal Methods in Software Engineering",
    courseCode: "414",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC304"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC429 and CISC269
export const CISC429: Course = {
    title: "Topics in Algorithms and Complexity Theory",
    courseCode: "429",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC436: Course = {
    title: "Bioinformatics",
    courseCode: "436",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC437 and CISC637
export const CISC437: Course = {
    title: "Database Systems",
    courseCode: "437",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//CISC320 recommended
//Cant get credit for CISC440 and CISC640
export const CISC440: Course = {
    title: "Computer Graphics",
    courseCode: "440",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220", "MATH241"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC442 and CISC642
export const CISC442: Course = {
    title: "Introduction to Computer Vision",
    courseCode: "442",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Crosslisted as CPEG419
//Cant get credit for CISC450 and CISC250, CPEG419, CISC650, ELEG651
export const CISC450: Course = {
    title: "Computer Networks I",
    courseCode: "450",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC260" || "CPEG222"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC451: Course = {
    title: "Data Compression in Multimedia",
    courseCode: "451",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220", "MATH210", "MATH241", "MATH205" || "MATH350"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC452: Course = {
    title: "Telecommunications Systems",
    courseCode: "452",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC250" || "CISC450"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC453: Course = {
    title: "Simulation of Computer Networks",
    courseCode: "453",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC450"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC458: Course = {
    title: "Applied Computer Networks",
    courseCode: "458",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC450"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC459 and CISC659
export const CISC459: Course = {
    title: "Topics in Communications, Distributed Computing and Networks",
    courseCode: "459",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC450"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC464: Course = {
    title: "Introduction to Network Security",
    courseCode: "464",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC450"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC466: Course = {
    title: "Independent Study",
    courseCode: "466",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC470 and CISC670
export const CISC470: Course = {
    title: "Programming Languages",
    courseCode: "470",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC275"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC471: Course = {
    title: "Compiler Design",
    courseCode: "471",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC260", "CISC303"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC473: Course = {
    title: "Computer Science Projects",
    courseCode: "473",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC474: Course = {
    title: "Advanced Web Technologies",
    courseCode: "474",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC275"],
    courseCoreq: ["CISC437"],
    courseDescription: ""
};

//CISC361 recommended
//Senior status required
//Cant get credit for CISC475 and CISC675
export const CISC475: Course = {
    title: "Advanced Software Engineering",
    courseCode: "475",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC275"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC449 and CISC649
export const CISC449: Course = {
    title: "Topics in Computer Applications",
    courseCode: "449",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC477: Course = {
    title: "Systems Administration",
    courseCode: "477",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC361"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC479 and CISC679
export const CISC479: Course = {
    title: "Topics in Architecture and Software",
    courseCode: "479",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC361"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Crosslisted as CGSC481
//Cant get credit for CISC481 and CISC681
export const CISC481: Course = {
    title: "Artificial Intelligence",
    courseCode: "481",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220", "CISC304"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC483: Course = {
    title: "Introduction to Data Mining",
    courseCode: "483",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC275"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//Cant get credit for CISC489 and CISC689
export const CISC489: Course = {
    title: "Topics: Artificial Intelligence",
    courseCode: "489",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC481" || "CISC681"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC498: Course = {
    title: "Computer Science Senior Design Project I",
    courseCode: "498",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC275", "CISC320"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const CISC499: Course = {
    title: "Computer Science Senior Design Project II",
    courseCode: "499",
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC498"],
    courseCoreq: ["None"],
    courseDescription: ""
};

export const courseList: Course[] = [
    CISC101,
    CISC103,
    CISC106,
    CISC108,
    CISC181,
    CISC210,
    CISC220,
    CISC250,
    CISC260,
    CISC275,
    CISC303,
    CISC304,
    CISC320,
    CISC355,
    CISC356,
    CISC360,
    CISC361,
    CISC364,
    CISC366,
    CISC372,
    CISC374,
    CISC401,
    CISC404,
    CISC409,
    CISC410,
    CISC411,
    CISC414,
    CISC429,
    CISC436,
    CISC437,
    CISC440,
    CISC442,
    CISC450,
    CISC451,
    CISC452,
    CISC453,
    CISC458,
    CISC459,
    CISC464,
    CISC466,
    CISC470,
    CISC471,
    CISC473,
    CISC474,
    CISC475,
    CISC449,
    CISC477,
    CISC479,
    CISC481,
    CISC483,
    CISC489,
    CISC498,
    CISC499
];
