import React, { useState } from "react";
import { Button } from "react-bootstrap";
interface DhStuff {
    dhNum: number;
    setDhNum: (newDhValue: number) => void;
}
function Doubler({ dhNum, setDhNum }: DhStuff): JSX.Element {
    return <Button onClick={() => setDhNum(2 * dhNum)}>Double</Button>;
}

function Halver({ dhNum, setDhNum }: DhStuff): JSX.Element {
    return <Button onClick={() => setDhNum(0.5 * dhNum)}>Halve</Button>;
}
export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhNum={dhValue} setDhNum={setDhValue} />
            <Halver dhNum={dhValue} setDhNum={setDhValue} />
        </div>
    );
}
