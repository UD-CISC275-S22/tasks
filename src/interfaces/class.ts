export interface Class {
    title: string;
    courseCode: string;
    preReq: [];
    credits: number;
    semester: "Fall" | "Winter" | "Spring" | "Summer";
    year: number;
}
