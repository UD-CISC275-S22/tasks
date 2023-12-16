//interface for creating a plan
import { Semester } from "./semester";
//name of plan, id encoded, all semesters involved (minimum 8 semesters), and total credits for degree

export interface Plan {
    title: string; //ex. computer science BS
    concentration: string; //ex. AI and robotics
    id: number;
    semesters: Semester[];
    credits: number; //total required credits
}
