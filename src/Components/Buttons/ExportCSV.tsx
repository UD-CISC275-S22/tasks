import React from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../../Interfaces/plan";

export const ExportCSV = ({ plans }: { plans: Plan[] }) => {
    function toCSV(): JSX.Element {
        //map( string => ${q.id},${q.name},${q.options}, etc. )
        //or .join them all
        //deep copy
        const planCopy = plans.map((plan: Plan) => ({
            ...plan,
            semesters: [...plan.semesters]
        }));
        const planComma = planCopy
            .map(
                (plan: Plan): string =>
                    `${plan.id},${plan.title},${plan.concentration},${plan.credits},
                    ${plan.semesters}`
            )
            .join("\n");
        const ResultString =
            "id,title,concentration,credits,semesters" + "\n" + planComma;
        return ();
    }
    return (
        <Button
            onClick={toCSV}
            style={{
                backgroundColor: "#EF5B5B",
                borderColor: "#922424",
                marginLeft: "5px",
                marginRight: "5px",
                marginTop: "5px",
                marginBottom: "5px",
                color: "black"
            }}
        >
            Export to CSV
        </Button>
    );
};
