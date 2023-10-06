import { useState } from "react";

export function useDoubleHalfState() {
    const [dhValue, setDhValue] = useState<number>(10);
    return { dhValue, setDhValue };
}
