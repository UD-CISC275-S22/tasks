import { Semester } from "../Interfaces/semester";
import { Course } from "../Interfaces/course";
import { Plan } from "../Interfaces/plan";
import { courseList } from "./course";

//later: make a state that from user input finds the course that they selected and input
//that into the courses that don't have a definitive course (Ex. if you need math205 or math350)
//the user would select math205 for example and that state variable would then be math205 and you
//change that math course in the semester to that specific course

//this is a general breadth constant course that you can keep for any semester or plan
//just make sure you change it so that the student can pick which breadth course they want to take
export const breadth: Course = {
    id: -1,
    title: "Breadth Requirement",
    name: "This is something we will have to have the user select what requirement they want. Each course will have a different requirement.",
    description: "", //depends on the course they select
    credits: 0, //depends on the course they select
    semester: [""], //depends on the course they select
    department: "CANR", //depends on the course they select DEFUALT IS CANR BECAUSE IT NEEDS TO BE A DEPARTMENT TYPE
    prereq: [""], //depends on the course they select
    coreq: [""], //depends on the course they select
    requirements: [""] //depends on the course they select
};

//this is a general elective constant course that you can keep for any semester or plan
export const elective: Course = {
    id: -2,
    title: "Free Elective",
    name: "",
    description: "",
    credits: 0,
    semester: [""],
    department: "CANR",
    prereq: [""],
    coreq: [""],
    requirements: [""]
};

//this is a general science/lab constant course that you can keep for any semester or plan
export const science: Course = {
    id: -3,
    title: "Science Requirement",
    name: "",
    description: "GEO or CHEM or PHYS",
    credits: 0,
    semester: [""],
    department: "CANR",
    prereq: [""],
    coreq: [""],
    requirements: [""]
};

//this is a general math constant course that you can keep for any semester or plan
export const math: Course = {
    id: -4,
    title: "Math Requirement",
    name: "",
    description: "Math 205 or Math 350",
    credits: 0,
    semester: [""],
    department: "CANR",
    prereq: [""],
    coreq: [""],
    requirements: [""]
};

//this is a general restricted elective constant course that you can keep for any semester or plan
export const restricted: Course = {
    id: -5,
    title: "Restricted Electives",
    name: "",
    description: "",
    credits: 0,
    semester: [""],
    department: "CANR",
    prereq: [""],
    coreq: [""],
    requirements: [""]
};

//this is a general systems requirement constant course that you can keep for any semester or plan
export const systems: Course = {
    id: -6,
    title: "Systems Requirement",
    name: "",
    description: "",
    credits: 0,
    semester: [""],
    department: "CANR",
    prereq: [""],
    coreq: [""],
    requirements: [""]
};

//this is a general higher level CISC constant course that you can keep for any semester or plan
export const higherLevel: Course = {
    id: -7,
    title: "CISC 300 Level Requirement",
    name: "",
    description: "",
    credits: 0,
    semester: [""],
    department: "CANR",
    prereq: [""],
    coreq: [""],
    requirements: [""]
};

//this is a general english constant course that you can keep for any semester or plan
export const english: Course = {
    id: -8,
    title: "English Requirement",
    name: "",
    description: "",
    credits: 0,
    semester: [""],
    department: "CANR",
    prereq: [""],
    coreq: [""],
    requirements: [""]
};

//explain why fall1 and fall2 and spring1 etc.
//fall1 reprensents semester 1 fall
//this function returns first fall semester in year 1 of 4 year plan
export function fall1(): Course[] {
    //id 1 is CISC108, id 101 is EGGG101, id 0 is ENGL110, id 12 is MATH241
    const fall1Courses = courseList.filter(
        (course) =>
            course.id == 1 ||
            course.id == 101 ||
            course.id == 0 ||
            course.id == 12
    );
    fall1Courses.push(breadth);
    return fall1Courses;
}

//this function returns first spring semester in year 1 of 4 year plan
export function spring1(): Course[] {
    //id 2 is CISC181 and id 3 is CISC210
    const spring1Courses = courseList.filter(
        (course) => course.id == 2 || course.id == 3
    );
    spring1Courses.push(elective);
    spring1Courses.push(breadth);
    spring1Courses.push(breadth);
    return spring1Courses;
}

//this function returns a portion of the second fall semester in year 1 of 4 year plan
//it returns a portion of the semester classes because the filtered classes are the only classes that every plan have in common
export function partFall2(): Course[] {
    const partFall2Courses = courseList.filter(
        //id 4 is CISC220 and id 5 is CISC260 and id 11 is MATH210
        (course) => course.id == 4 || course.id == 5 || course.id == 11
    );
    return partFall2Courses;
}

//this function returns a portion of the second spring semester in year 1 of 4 year plan
//it returns a portion of the semester classes because the filtered classes are the only classes that every plan have in common
export function partSpring2(): Course[] {
    const partSpring2Courses = courseList.filter(
        //id 6 is CISC275 and id 34 is CISC355
        (course) => course.id == 6 || course.id == 34
    );
    /*during the second spring semester, students should take MATH 205 or MATh 350 so
    we will have a select option for students to decide which one they want to take to
    satisfy the requirement. However, if some classes require just MATH205 or both push
    those classes in those plan types*/
    return partSpring2Courses;
}

//this is the plan for the AI concentration
export function AI(): Plan {
    //plan fields
    const title = "BS Computer Science";
    const concentration = "Artificial Intelligence and Robotics Concentration";
    const id = 0;

    //making the courses for each semester in each year (whole 4 year plan)
    const fall1AI = fall1();
    const spring1AI = spring1();
    const fall2AI = partFall2();
    fall2AI.push(science);
    fall2AI.push(elective);
    const spring2AI = partSpring2();
    spring2AI.push(science);
    spring2AI.push(breadth);
    spring2AI.push(math);
    const fall3AI = courseList.filter(
        //id 8 is CISC320 and id 35 is CISC304
        (course) => course.id == 8 || course.id == 35
    );
    fall3AI.push(restricted);
    fall3AI.push(systems);
    fall3AI.push(higherLevel);
    const spring3AI = courseList.filter(
        //id 7 is CISC303 and id 40 is CISC481
        (course) => course.id == 7 || course.id == 40
    );
    spring3AI.push(elective);
    spring3AI.push(restricted);
    spring3AI.push(english);
    const fall4AI = courseList.filter(
        //id 41 is CISC483 and id 16 is CISC498 and id 39 is CISC442
        (course) => course.id == 41 || course.id == 16 || course.id == 92
    );
    fall4AI.push(restricted);
    fall4AI.push(elective);
    const spring4AI = courseList.filter(
        //id 42 is CISC484 and id 17 is CISC499
        (course) => course.id == 42 || course.id == 17
    );
    spring4AI.push(restricted);
    spring4AI.push(elective);
    spring4AI.push(elective);

    //making the actual semester types
    const fall1Sem: Semester = {
        type: ["Fall"],
        year: 1,
        totalCredits: 15,
        courseList: fall1AI
    };
    const spring1Sem: Semester = {
        type: ["Spring"],
        year: 1,
        totalCredits: 15,
        courseList: spring1AI
    };
    const fall2Sem: Semester = {
        type: ["Fall"],
        year: 2,
        totalCredits: 15,
        courseList: fall2AI
    };
    const spring2Sem: Semester = {
        type: ["Spring"],
        year: 2,
        totalCredits: 15,
        courseList: spring2AI
    };
    const fall3Sem: Semester = {
        type: ["Fall"],
        year: 3,
        totalCredits: 15,
        courseList: fall3AI
    };
    const spring3Sem: Semester = {
        type: ["Spring"],
        year: 3,
        totalCredits: 15,
        courseList: spring3AI
    };
    const fall4Sem: Semester = {
        type: ["Fall"],
        year: 4,
        totalCredits: 15,
        courseList: fall4AI
    };
    const spring4Sem: Semester = {
        type: ["Spring"],
        year: 4,
        totalCredits: 15,
        courseList: spring4AI
    };

    //now the actual semester array for the AI plan
    const AI_Semesters = [
        fall1Sem,
        spring1Sem,
        fall2Sem,
        spring2Sem,
        fall3Sem,
        spring3Sem,
        fall4Sem,
        spring4Sem
    ];

    //returns the actual plan
    return {
        title: title,
        concentration: concentration,
        id: id,
        semesters: AI_Semesters,
        credits: 124
    };
}
