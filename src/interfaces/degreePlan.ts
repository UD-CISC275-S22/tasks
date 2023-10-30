import { Class } from "./class";
import { semester } from "./semster";

export interface degreePlan {
    semesters: semester[];
    name: string;
    id: number;
}

export interface degreePlanProps {
    degreePlan: degreePlan;
    setDegreePlan: (degreePlan: degreePlan) => void;
}
