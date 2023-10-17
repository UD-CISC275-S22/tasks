import { date } from "./date-time.js";

export interface classes {
    courseCode: string;
    courseTitle: string;
    credits: number;
    preReq: string[]; // array of any classes needed before
    availableSeason: string[]; //Spring or Fall or both
    classTime: date;
    location: string; //Where the class is located
    instructor: string; //Name of instructor

    setDate(time: string, days: string[]): void;
}
