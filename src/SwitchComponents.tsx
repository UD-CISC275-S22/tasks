import React from "react";
import { useState } from "react";
import { SemesterTable } from "./semester/SemesterTable";

export function SwitchComponents({
    seeSemesterView
}: {
    seeSemesterView: boolean;
}): JSX.Element {
    if (seeSemesterView) {
        return <SemesterTable></SemesterTable>;
    }
    return <div></div>;
}
