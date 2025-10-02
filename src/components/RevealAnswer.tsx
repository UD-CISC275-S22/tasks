import React, { useState } from "react";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>Reveal Answer</button>
            {visible && <div>42</div>}
        </div>
    );
}
