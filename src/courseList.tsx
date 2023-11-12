import { Course } from "./interfaces/course";

//Only viable for degree if it is first CISC course taken
export const CISC101: Course = {
    title: "Principles of Computing",
    courseCode: 101,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"],
    courseDescription: ""
};

//For credit, must be taken before 106/108 (not required)
export const CISC103: Course = {
    classTitle: "Introduction to Computer Science with Web Applications",
    classCode: 103,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"]
};

//Cant get credit in both 106 and 108 (108 reccommended)
export const CISC106: Course = {
    classTitle: "General Computer Science for Engineers",
    classCode: 106,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["MATH241"]
};

//Cant get credit in both 106 and 108 (108 reccommended)
export const CISC108: Course = {
    classTitle: "Introduction to Computer Science I",
    classCode: 108,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["MATH115" || "MATH117" || "Higher MATH"]
};

export const CISC181: Course = {
    classTitle: "Introduction to Computer Science II",
    classCode: 181,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC108" || "CISC106"],
    courseCoreq: ["MATH221" || "MATH241" || "Higher MATH"]
};

export const CISC210: Course = {
    classTitle: "Introduction to Systems Programming",
    classCode: 210,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC106" || "CISC108"],
    courseCoreq: ["MATH221" || "MATH241" || "Higher MATH"]
};

export const CISC220: Class = {
    classTitle: "Data Structures",
    classCode: 220,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC181"],
    courseCoreq: ["MATH210" || "MATH241"]
};

//Cant receive credit for both CISC250 and CISC450
export const CISC250: Class = {
    classTitle: "Business Telecommunication Networks",
    classCode: 250,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC181"],
    courseCoreq: ["None"]
};

export const CISC260: Class = {
    classTitle: "Machine Organization and Assembly Language",
    classCode: 260,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC181"],
    courseCoreq: ["None"]
};

export const CISC275: Class = {
    classTitle: "Introduction to Software Engineering",
    classCode: 275,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"]
};

export const CISC303: Class = {
    classTitle: "Automata Theory",
    classCode: 303,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["MATH210", "CISC220"],
    courseCoreq: ["None"]
};

export const CISC304: Class = {
    classTitle: "Logic and Programming",
    classCode: 304,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["MATH210", "CISC220"],
    courseCoreq: ["None"]
};

export const CISC320: Class = {
    classTitle: "Introduction to Algorithms",
    classCode: 320,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["MATH210", "CISC220"],
    courseCoreq: ["None"]
};

//Cant be used as technical elective for CISC majors
export const CISC355: Class = {
    classTitle: "Computers, Ethics and Society",
    classCode: 355,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"]
};

//Junior or Senior standing, cant be used as technical elective for CISC majors
export const CISC356: Class = {
    classTitle: "Intellectual Property in the Digital Age",
    classCode: 356,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"]
};

export const CISC360: Class = {
    classTitle: "Computer Architecture",
    classCode: 360,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220", "CISC260"],
    courseCoreq: ["None"]
};

//CISC360 recommended
export const CISC361: Class = {
    classTitle: "Operating Systems",
    classCode: 361,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220", "CISC260" || "CPEG222"],
    courseCoreq: ["None"]
};

export const CISC364: Class = {
    classTitle: "System Security",
    classCode: 364,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC361"],
    courseCoreq: ["None"]
};

//between 1-6 credits
export const CISC366: Class = {
    classTitle: "Independent Study",
    classCode: 366,
    credits: 6,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"]
};

export const CISC372: Class = {
    classTitle: "Parallel Programming",
    classCode: 372,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"]
};

export const CISC374: Class = {
    classTitle: "Educational Game Development",
    classCode: 374,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC401 and CISC601
export const CISC401: Class = {
    classTitle: "Elements of the Theory of Computation",
    classCode: 401,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC303"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC404 and CISC604
export const CISC404: Class = {
    classTitle: "Logic in Computer Science",
    classCode: 404,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC304"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC409 and CISC609
export const CISC409: Class = {
    classTitle: "Topics in Theoretical Computer Science",
    classCode: 409,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC401"],
    courseCoreq: ["None"]
};

//Crosslisted as MATH426
export const CISC410: Class = {
    classTitle: "Introduction to Numerical Analysis & Algorithmic Computation",
    classCode: 410,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["MATH349" || "MATH341" || "MATH351", "CISC106" || "CISC108"],
    courseCoreq: ["None"]
};

//Crosslisted as MATH428
export const CISC411: Class = {
    classTitle: "Algorithmic and Numerical Solution of Differential Equations",
    classCode: 411,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["MATH426" || "CISC410"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC616/CPEG614 and CISC414
export const CISC414: Class = {
    classTitle: "Formal Methods in Software Engineering",
    classCode: 414,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC304"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC429 and CISC269
export const CISC429: Class = {
    classTitle: "Topics in Algorithms and Complexity Theory",
    classCode: 429,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"]
};

export const CISC436: Class = {
    classTitle: "Bioinformatics",
    classCode: 436,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC437 and CISC637
export const CISC437: Class = {
    classTitle: "Database Systems",
    classCode: 437,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"]
};

//CISC320 recommended
//Cant get credit for CISC440 and CISC640
export const CISC440: Class = {
    classTitle: "Computer Graphics",
    classCode: 440,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220", "MATH241"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC442 and CISC642
export const CISC442: Class = {
    classTitle: "Introduction to Computer Vision",
    classCode: 442,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220"],
    courseCoreq: ["None"]
};

//Crosslisted as CPEG419
//Cant get credit for CISC450 and CISC250, CPEG419, CISC650, ELEG651
export const CISC450: Class = {
    classTitle: "Computer Networks I",
    classCode: 450,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC260" || "CPEG222"],
    courseCoreq: ["None"]
};

export const CISC451: Class = {
    classTitle: "Data Compression in Multimedia",
    classCode: 451,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220", "MATH210", "MATH241", "MATH205" || "MATH350"],
    courseCoreq: ["None"]
};

export const CISC452: Class = {
    classTitle: "Telecommunications Systems",
    classCode: 452,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC250" || "CISC450"],
    courseCoreq: ["None"]
};

export const CISC453: Class = {
    classTitle: "Simulation of Computer Networks",
    classCode: 453,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC450"],
    courseCoreq: ["None"]
};

export const CISC458: Class = {
    classTitle: "Applied Computer Networks",
    classCode: 458,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC450"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC459 and CISC659
export const CISC459: Class = {
    classTitle: "Topics in Communications, Distributed Computing and Networks",
    classCode: 459,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC450"],
    courseCoreq: ["None"]
};

export const CISC464: Class = {
    classTitle: "Introduction to Network Security",
    classCode: 464,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC450"],
    courseCoreq: ["None"]
};

export const CISC466: Class = {
    classTitle: "Independent Study",
    classCode: 466,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC470 and CISC670
export const CISC470: Class = {
    classTitle: "Programming Languages",
    classCode: 470,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC275"],
    courseCoreq: ["None"]
};

export const CISC471: Class = {
    classTitle: "Compiler Design",
    classCode: 471,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC260", "CISC303"],
    courseCoreq: ["None"]
};

export const CISC473: Class = {
    classTitle: "Computer Science Projects",
    classCode: 473,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"]
};

export const CISC474: Class = {
    classTitle: "Advanced Web Technologies",
    classCode: 474,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC275"],
    courseCoreq: ["CISC437"]
};

//CISC361 recommended
//Senior status required
//Cant get credit for CISC475 and CISC675
export const CISC475: Class = {
    classTitle: "Advanced Software Engineering",
    classCode: 475,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC275"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC449 and CISC649
export const CISC449: Class = {
    classTitle: "Topics in Computer Applications",
    classCode: 449,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["None"],
    courseCoreq: ["None"]
};

export const CISC477: Class = {
    classTitle: "Systems Administration",
    classCode: 477,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC361"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC479 and CISC679
export const CISC479: Class = {
    classTitle: "Topics in Architecture and Software",
    classCode: 479,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC361"],
    courseCoreq: ["None"]
};

//Crosslisted as CGSC481
//Cant get credit for CISC481 and CISC681
export const CISC481: Class = {
    classTitle: "Artificial Intelligence",
    classCode: 481,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC220", "CISC304"],
    courseCoreq: ["None"]
};

export const CISC483: Class = {
    classTitle: "Introduction to Data Mining",
    classCode: 483,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC275"],
    courseCoreq: ["None"]
};

//Cant get credit for CISC489 and CISC689
export const CISC489: Class = {
    classTitle: "Topics: Artificial Intelligence",
    classCode: 489,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC481" || "CISC681"],
    courseCoreq: ["None"]
};

export const CISC498: Class = {
    classTitle: "Computer Science Senior Design Project I",
    classCode: 498,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC275", "CISC320"],
    courseCoreq: ["None"]
};

export const CISC499: Class = {
    classTitle: "Computer Science Senior Design Project II",
    classCode: 499,
    credits: 3,
    degreeRequirements: ["None"],
    coursePrereq: ["CISC498"],
    courseCoreq: ["None"]
};
