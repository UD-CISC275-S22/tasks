export interface Class {
    courseTitle: string;
    courseCode: string;
    numPreReqs: number;
    preReqs: string[];
    credits: number;
    canEditCredits: boolean;
    semester: "Fall" | "Winter" | "Spring" | "Summer";
    year: "Freshman" | "Sophomore" | "Junior" | "Senior";
    taken: boolean;
    note: string;
}
