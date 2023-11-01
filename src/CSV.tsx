import React, { ChangeEvent, useRef, useState } from "react";
import "./App.css";
//I needed to download the package using "npm install @types/react-csv"
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";

/*  GenerateCSV
Params:
    data: string[][]
        The data to export into the csv
    filename: string
        filename to save as
*/
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

/*  Import
Params:
    importData: string
        The state hook containing any imported data
    setImportData: (newData: string) => void
        State setter for imported data
*/
export function Import({
    importData,
    setImportData
}: {
    importData: string;
    setImportData: (newData: string) => void;
}) {
    const [isImported, setIsImported] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target?.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const content = e.target?.result;
                setImportData(content as string);
            };
            fileReader.readAsText(file);
        }
    };

    const handleImportClick = () => {
        setIsImported(true);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>CSV Degree Plan Import:</h1>
            <form>
                <input type="file" accept=".csv" onChange={handleFileChange} />
                <button type="button" onClick={handleImportClick}>
                    Import
                </button>
            </form>
            {isImported && importData && (
                <div>
                    <h2>Imported Plan:</h2>
                    <pre>{importData}</pre>
                </div>
            )}
        </div>
    );
}
