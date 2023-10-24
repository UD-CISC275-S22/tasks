export interface Class {
    courseTitle: string;
    courseCode: string;
    numPreReqs: number;
    preReqs: string[];
    credits: number;
    semester: "Fall" | "Winter" | "Spring" | "Summer";
    year: number;
    taken: boolean;
}
