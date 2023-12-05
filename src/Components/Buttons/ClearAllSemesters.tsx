import React from "react";
import { Button } from "react-bootstrap";

export const ClearAllSemesters = ({ clearAll }: { clearAll: () => void }) => {
    return (
        <Button
            onClick={() => confirm("Are you sure") && clearAll()}
            style={{
                backgroundColor: "#99B2DD",
                borderColor: "#4D7298",
                marginLeft: "5px",
                marginRight: "5px",
                marginTop: "5px",
                marginBottom: "5px",
                color: "black"
            }}
        >
            Clear ALL Semesters
        </Button>
    );
};
