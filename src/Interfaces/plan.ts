//look at cisc udel degree requirement examples
//ex. what does the core need, capstone, options for lab science, etc.
//only need ONE degree interface
//types of degrees will be functions in the requirements.tsx file

import { Semester } from "./semester";
//name of plan, id encoded, all semesters involved (minimum 8 semesters), and total credits for degree

export interface Plan {
    id: number;
    title: string; //ex. computer science BS
    concentration: string; //ex. AI and robotics
    semesters: Semester[];
    credits: number; //total required credits
}
