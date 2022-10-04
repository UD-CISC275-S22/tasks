import React, { useState } from "react";
import { Button } from "react-bootstrap";

function nxtalpha(h: string, harr: string[]): string {
    const nxt: string = harr
        .filter((x: string): boolean => x > h)
        .reduce((s: string, x: string) => (s < x ? s : x), h);
    return nxt;
}

function nxtdate(h: string, harr: string[]): string {
    const dates = { h1: 1 };
    const nxt: string = harr
        .filter((x: string): boolean => x > h)
        .reduce((s: string, x: string) => (s < x ? s : x), h);
    return nxt;
}

export function CycleHoliday(): JSX.Element {
    const [holidays, setholidays] = useState<string[]>([""]);
}
