import React from "react";
import "./App.css";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";
import { usePapaParse, useCSVReader } from "react-papaparse";
import { ParseResult } from "papaparse";

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

/*  ImportCSV() (Nicky's import, will probably be swapped for the other one)
Params:
  setImportData: (data: string[][]) => void
      The setter for the import data state
*/
export function ImportCSV({
    setImportData
}: {
    setImportData: (data: string[][]) => void;
}): JSX.Element {
    const { CSVReader } = useCSVReader();
    const { readString } = usePapaParse();

    function handleImport(results: string) {
        readString(results, {
            header: true,
            complete: (results: ParseResult<string[]>) => {
                setImportData(results.data);
            }
        });
    }

    return (
        <CSVReader onUploadAccepted={handleImport}>
            {(
                {
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps
                }: /*eslint-disable-next-line @typescript-eslint/no-explicit-any */
                any /*eslint-disable-next-line no-extra-parens*/
            ) => (
                <>
                    <div>
                        <button type="button" {...getRootProps()}>
                            Browse file
                        </button>
                        <div>{acceptedFile && acceptedFile.name}</div>
                        <button {...getRemoveFileProps()}>Remove</button>
                    </div>
                    <ProgressBar></ProgressBar>
                </>
            )}
        </CSVReader>
    );
}
