import React, { useRef } from "react";
import CSVReader, { CSVReaderRef } from "react-csv-reader";
import { parse, ParseError } from "csv-parse";
import { Button } from "react-bootstrap";
import { Plan } from "../../Interfaces/plan";

type CSVData = string[];

export const ImportCSV = ({
    plans,
    handleImport
}: {
    plans: Plan[];
    handleImport: (data: Plan[]) => void;
}) => {
    const csvReaderRef = useRef<CSVReaderRef>(null);

    const handleForce = (data: CSVData) => {
        const headers = [
            "title",
            "concentration",
            "id",
            "semesters",
            "credits"
        ];

        parse(
            data.join("\n"),
            { delimiter: ",", columns: headers },
            (err: ParseError | undefined, result: Plan[]) => {
                if (err) {
                    console.error("Error parsing CSV:", err);
                    return;
                }
                // 'result' contains the parsed CSV data
                handleImport(result);
            }
        );
    };

    const openFileBrowser = () => {
        if (csvReaderRef.current) {
            csvReaderRef.current.openFileBrowser();
        }
    };

    return (
        <>
            <CSVReader
                ref={csvReaderRef}
                onFileLoaded={handleForce}
                onError={(error) => console.log(error)}
            />
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
                onClick={openFileBrowser}
            >
                Import CSV
            </Button>
        </>
    );
};
