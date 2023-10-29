import { classes } from "./classes";

export interface semester {
    id: number;
    fullTime: boolean;
    classList: classes[];
    totalCredits: number;
    season: string;
}
