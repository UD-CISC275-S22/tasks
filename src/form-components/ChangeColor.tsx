import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors=["red","blue","green","purple","brown","cyan","magenta","orange"];
    return (
        <div>
            {colors.map((Color: string,i) => 
             <Form.Check style={{backgroundColor:Color}}
                inline
                key={i}
                type="radio"
                name="color"
                label={Color}
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                checked={color === Color}
                value={Color}
            />
            
            )}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
