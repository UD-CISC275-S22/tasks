export interface Class {
    courseTitle: string;
    courseCode: string;
    numPreReqs: number;
    preReqs: string[];
    credits: number;
    canEditCredits: boolean;
    semester: "Fall" | "Winter" | "Spring" | "Summer" | "";
    //Semester can be "" for default value reasons
    year: "";
    taken: boolean;
    note: string;
}
