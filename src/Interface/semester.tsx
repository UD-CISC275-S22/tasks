import { classes } from "./classes";

export interface semester {
    fullTime: boolean;
    classList: classes[];
    totalCredits: number;
    season: string;
}
