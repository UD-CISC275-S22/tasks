//Example:
import React, { useState } from "react";
import { Button, Row, Col, Stack } from "react-bootstrap";
import { DegreePlan } from "./interfaces/degreeplan";
import { Semester } from "./interfaces/semester";
import { Course } from "./interfaces/course";
import { DpStarterSampleCard } from "./DpStarterSampleCard";
import { DpStarterView } from "./DpStarterView";

//have some variable that keeps track of id's, notice from the json file we already have id's 1 and 2 taken, so we would start from there

//todo: Here we will show the user the sample card as well as handle how to showing the user the full dp table

// also note that you have two degree plans on the json data, you only need to show 1
// this is essentially the list of dp's, but since this is the tutorial one it is only a list of one
// this will essentially be like the QuizList example just wihout the need for map

export function DpStarterSample({
    jsonDp
}: {
    jsonDp: DegreePlan[];
}): JSX.Element {
    //displayId will be used to show the user the dp data (open up the full dp view), it will allow us to track when it is changed so we can show the user
    const [displayId, setDisplayId] = useState<null | number>(null);
    const degreePlansSample: DegreePlan[] = jsonDp;

    const handleQuizView = (id: number) => {
        setDisplayId(id);
    };
    // what this will do is set the displayId to null so that the dPView (expanded version) exits out of the view once the user click exit button
    const resetDisplayId = () => {
        setDisplayId(null);
    };

    return (
        <Stack gap={3}>
            <div className="dpStarterSample_card">
                {!displayId && (
                    <DpStarterSampleCard
                        dp={degreePlansSample[0]}
                        handleClick={handleQuizView}
                    ></DpStarterSampleCard>
                )}
                {degreePlansSample.map((dp: DegreePlan) => {
                    if (displayId === dp.id) {
                        return (
                            <DpStarterView
                                dp={dp}
                                resetView={resetDisplayId}
                            ></DpStarterView>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </Stack>
    );
}
