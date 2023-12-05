import React from "react";
import { Button } from "react-bootstrap";

export const StartNewPlan = ({
    startNewSession
}: {
    startNewSession: () => void;
}) => {
    return (
        <Button
            onClick={startNewSession}
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
            Start New Plan
        </Button>
    );
};
