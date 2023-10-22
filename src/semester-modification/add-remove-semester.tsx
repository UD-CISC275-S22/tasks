import { dateTime } from "../Interface/dateTime";
import { semester } from "../Interface/semester";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

export function addClass(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}

// props: {
//     code: string;
//     title: string;
//     credits: number;
//     preReq: string[];
//     schedule: dateTime;
//     location: string;
//     instructor: string;
// }
