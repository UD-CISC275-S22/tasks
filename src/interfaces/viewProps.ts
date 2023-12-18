import { degreePlan } from "./degreePlan";
export enum Views {
    semestersView = "semestersView",
    degreePlanView = "degreePlanView"
}
export interface viewProps {
    setCurrentView: (view: Views) => void;
    setCurrentDegreePlan: (degreePlan: degreePlan) => void;
}
