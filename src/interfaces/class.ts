export interface Class {
    courseTitle: string;
    courseCode: string;
    numPreReqs: number;
    preReqs: string[];
    semester: string;
    OGcode: string;
    credits: number;
    canEditCredits: boolean;
    taken: boolean;
    note: string;
}
