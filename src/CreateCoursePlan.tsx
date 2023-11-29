import { useCallback, useMemo, useRef, useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import React from "react";

import "ag-grid-community";
import "ag-grid-enterprise";
//ModuleRegistry.registerModules([MasterDetailModule]);
type RowData = {
    name: string;
    model: string;
    price: number;
};

// Define a type for the column definitions
type ColumnDefinition = {
    headerName: string;
    field: keyof RowData;
};

export function CreateCoursePlan() {
    const gridRef = useRef<AgGridReact>(null);
    const rowData: RowData[] = [
        { name: "Toyota", model: "test", price: 35000 },
        { name: "Ford", model: "Mondeo", price: 32000 },
        { name: "Porsche", model: "Boxter", price: 72000 }
    ];

    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        // group cell renderer needed for expand / collapse icons
        {
            field: "name",
            cellRenderer: "agGroupCellRenderer",
            checkboxSelection: true
        },
        { field: "model" },
        { field: "price" }
    ]);
    const MyCellRendererComp = () => {
        return (
            <div className="my-custom-detail">
                <p>Test Data</p>
            </div>
        );
    };

    const DetailCellRenderer = () => (
        <h1 style={{ padding: "10px", margin: "0", fontSize: "16px" }}>
            My Custom Detail
        </h1>
    );
    const detailCellRenderer = useMemo(() => {
        return DetailCellRenderer;
    }, []);
    const strMultiple = "multiple";
    const gridOptions = {
        detailRowHeight: 60,
        masterDetail: true,
        detailCellRenderer: DetailCellRenderer,
        rowSelection: strMultiple as "multiple",
        //checkboxSelection: true,
        rowMultiSelectWithClick: true
    };
    const onFilterTextBoxChanged = () => {
        gridRef.current!.api.setQuickFilter(
            (document.getElementById("filter-text-box") as HTMLInputElement)
                .value
        );
    };
    return (
        <div>
            <div className="example-header">
                <span>Search:</span>
                <input
                    type="text"
                    id="filter-text-box"
                    placeholder="search Course"
                    onInput={onFilterTextBoxChanged}
                />
            </div>
            <div
                className="ag-theme-alpine"
                style={{ height: 200, width: 600 }}
            >
                <AgGridReact
                    //masterDetail={true}
                    //detailCellRenderer={detailCellRenderer}
                    rowData={rowData}
                    ref={gridRef}
                    columnDefs={columnDefs}
                    gridOptions={gridOptions}
                ></AgGridReact>
            </div>
        </div>
    );
}
