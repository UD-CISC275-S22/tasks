import React from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../../Interfaces/plan";
import { CSVLink } from "react-csv";
import { useTable } from "react-table";

export const ExportCSV = ({ plans }: { plans: Plan[] }) => {
    const columns = [
        { Header: "ID", accessor: "id" },
        { Header: "Title", accessor: "title" },
        { Header: "Concentration", accessor: "concentration" },
        { Header: "Total Credits", accessor: "credits" },
        { Header: "Semesters", accessor: "semesters" }
    ];
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });
    function toCSV(): JSX.Element {
        const csvData = [
            ["ID", "Title", "Concentration", "Total Credits", "Semesters"],
            ...plans.map(({ id, title, concentration, credits, semesters }) => [
                id,
                title,
                concentration,
                credits,
                semesters
            ])
        ];
        return (
            <div className="export">
                {/* Export Button Start */}
                <CSVLink
                    className="downloadbtn"
                    filename="my-plans.csv"
                    data={csvData}
                >
                    Export Plans to CSV
                </CSVLink>
                {/* Export Button End */}
                {/* Table Start */}
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr
                                key={id}
                                data={...headerGroup.getHeaderGroupProps()}
                            >
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {/* Table End */}
            </div>
        );
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
