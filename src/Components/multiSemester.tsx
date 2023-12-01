import React from "react";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import { ViewSemester } from "./ViewSemester";
import { Stack } from "react-bootstrap";

export function MultiSemester({
    currentPlan,
    plans,
    settingPlans,
    settingPlan,
    clearSemesterCourses,
    editingSemester
}: {
    currentPlan: Plan;
    plans: Plan[];
    settingPlans: (t: Plan[]) => void;
    settingPlan: (t: Plan) => void;
    clearSemesterCourses: (id: string) => void;
    editingSemester: (plan: Plan) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {currentPlan.semesters.map((semester: Semester) => (
                <div key={semester.id}>
                    <ViewSemester
                        semester={semester}
                        currentPlan={currentPlan}
                        editingSemester={editingSemester}
                        plans={plans}
                        settingPlan={settingPlan}
                        settingPlans={settingPlans}
                        clearSemesterCourses={clearSemesterCourses}
                    ></ViewSemester>
                </div>
            ))}
        </Stack>
    );
}
