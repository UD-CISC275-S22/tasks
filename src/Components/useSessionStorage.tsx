import { useState, useEffect } from "react";

function getSessionStorageOrDefault(key: string, defaultValue: unknown) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
        return defaultValue as typeof defaultValue;
    }
    return JSON.parse(stored);
}

export function useSessionStorage(key: string, defaultValue: unknown) {
    // Use the getSessionStorageOrDefault function to get the initial value from sessionStorage

    const [value, setValue] = useState(
        getSessionStorageOrDefault(key, defaultValue)
    );

    // Use useEffect to update sessionStorage whenever the value changes
    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value) || "");
    }, [key, value]);

    // Return the current value and a function to update it
    return [value, setValue];
}
