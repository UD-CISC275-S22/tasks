import React from "react";
import "./App.css";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";

export function GenerateCSV({
    data,
    filename
}: {
    data: string[][];
    filename: string;
}): JSX.Element {
    return (
        <CSVLink data={data} filename={filename}>
            <Button>Download CSV</Button>
        </CSVLink>
    );
}
