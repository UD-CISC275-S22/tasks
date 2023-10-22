import { dateTime } from "./dateTime";

export interface classes {
    code: string;
    title: string;
    credits: number;
    preReq: string[];
    schedule: dateTime;
    location: string;
    instructor: string;
}

// Course code
// Course title
// Credits
// Pre req
// Available time (Spring Fall)
// Class time (date/time)?
// Location
// Instructor
