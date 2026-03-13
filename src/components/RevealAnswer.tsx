import React, { useState } from "react";

export function RevealAnswer(): React.JSX.Element {
    const [show, setShow] = useState(false);

    function toggleAnswer() {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={toggleAnswer}>
                {show ? "Hide Answer" : "Reveal Answer"}
            </button>

            {show && <p>42</p>}
        </div>
    );
}