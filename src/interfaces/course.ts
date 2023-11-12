export interface Course {
    title: string;
    courseCode: number;
    credits: number;
    degreeRequirements: string[];
    coursePrereq: string[];
    courseCoreq: string[];
    courseDescription: string;
}
