export interface Class {
    courseTitle: string;
    courseCode: string;
    preReqs: string[];
    credits: number;
    semester: "Fall" | "Winter" | "Spring" | "Summer";
    year: number;
}
