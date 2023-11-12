//Todo: Students can see a list of all the degrees plans that they have made
import React, { useState } from "react";
import { DegreePlan } from "./interfaces/degreeplan";
import { DpCard } from "./DpCard";
import { DpView } from "./DpView";

export function DpList({ dp }: { dp: DegreePlan[] }): JSX.Element {
    const [displayId, setDisplayId] = useState<null | number>(null);
    const handleDpView = (id: number) => {
        setDisplayId(id);
    };
    const resetDisplayId = () => {
        setDisplayId(null);
    };
    return (
        <div>
            {!displayId && <DpCard dp={dp} handleClick={handleDpView}></DpCard>}
            {dp.map((dp: DegreePlan) => {
                if (displayId === dp.id) {
                    return <DpView dp={dp} resetView={resetDisplayId}></DpView>;
                } else {
                    return null;
                }
            })}
        </div>
    );
}
