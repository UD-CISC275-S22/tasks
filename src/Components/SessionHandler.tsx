import React, { useState } from "react";
import { ViewSemester } from "./Semester";
import { Button } from "react-bootstrap";
import { useSessionStorage } from "./useSessionStorage";

export function SessionHandler(): JSX.Element {
    const useStorageExists = sessionStorage.getItem("useStorage");
    const [useStorage, setUseStorage] = useState(() =>
        !useStorageExists ? useSessionStorage("useStorage", false) : false
    );

    function useStorageHandler() {
        setUseStorage(true);
    }

    function startNewHandler() {
        setUseStorage(false);
    }

    return (
        <div>
            <Button onClick={startNewHandler}>Start a New Session</Button>
            <Button onClick={useStorageHandler}>Load a Session</Button>
            <ViewSemester></ViewSemester>
        </div>
    );
}
