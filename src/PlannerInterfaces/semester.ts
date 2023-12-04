import { course } from "./course";

export interface semester {
    id: string;
    name: string;
    year: number;
    season: string;
    courses: course[];
}
