import { course } from "./course";

export interface semester {
    id: string;
    name: string;
    year: number;
    courses: course[];
    season: string;
}
