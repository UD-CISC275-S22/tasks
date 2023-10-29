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
