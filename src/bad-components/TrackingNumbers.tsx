import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function TrackingNumbers(): JSX.Element {
    const [latestNumber, setLatestNumber] = useState<number>(0);
    const [trackedNumbers, setTrackedNumbers] = useState<number[]>([]);

    function stopTracking(targetNumber: number) {
        const withoutNumber = trackedNumbers.filter(
            (aNumber: number) => aNumber !== targetNumber
        );
        setTrackedNumbers(withoutNumber);
    }

    function trackNumber() {
        setLatestNumber(1 + latestNumber);
        const withNumber = [...trackedNumbers, latestNumber];
        setTrackedNumbers(withNumber);
    }

    // Uncomment the below and fix the error!
    return (
        <div>
            {/* <ol>
                {trackedNumbers.map((trackedNumber: number) => (
                    <li>
                        Tracking {trackedNumber} (
                        <Button onClick={() => stopTracking(trackedNumber)}>
                            Remove
                        </Button>
                        )
                    </li>
                ))}
            </ol> */}
            <Button onClick={trackNumber}>Track {1 + latestNumber}</Button>
        </div>
    );
}
