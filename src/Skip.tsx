import React, { useState } from "react";

const [showRedBox, setShowRedBox] = useState(false);

const toggleRedBox = () => {
    setShowRedBox(!showRedBox);
};

<button onClick={toggleRedBox}>Skip</button>;
{
    showRedBox && (
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red",
                margin: "10px"
            }}
            contentEditable={true}
        >
            Skipping (Semester) (Year)
        </div>
    );
}
