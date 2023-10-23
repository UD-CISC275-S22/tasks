export interface Quiz {
    title: string;
    courseCode: string;
    preReq: [];
    credits: number;
    semester: "Fall" | "Winter" | "Spring" | "Summer";
    year: number;
}
