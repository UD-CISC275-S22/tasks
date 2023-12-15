export /*import React from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../../Interfaces/plan";
import { CSVDownload, CSVLink } from "react-csv";
import { useTable } from "react-table";

export const ExportCSV = ({ plans }: { plans: Plan[] }) => {
    const headers = [
        { label: "ID", key: "id" },
        { label: "Title", key: "title" },
        { label: "Concentration", key: "concentration" },
        { label: "Total Credits", key: "credits" },
        { label: "Semesters", key: "semesters" }
    ];
    const str = [];
    const csvData = plans.toString();
    return (
        <CSVLink data={csvData} headers={headers} filename={"my-plans.csv"}>
            {console.log(csvData)}
            <Button
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
        </CSVLink>
    );
};
*/ {};
