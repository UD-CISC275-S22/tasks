import { classes } from "./classes";

export interface semester {
    schedule: classes[];
    totalCredits: number;
    fullTime: boolean;
}
