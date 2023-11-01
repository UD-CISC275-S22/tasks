import React, { useState } from "react";

export function Import() {
    const [fileContent, setFileContent] = useState<string | null>(null);
    const [isImported, setIsImported] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target?.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const content = e.target?.result;
                setFileContent(content as string);
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
            {isImported && fileContent && (
                <div>
                    <h2>Imported Plan:</h2>
                    <pre>{fileContent}</pre>
                </div>
            )}
        </div>
    );
}
