import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Helper function to roll a six-sided die
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

// Component for displaying two dice and rolling them
export function TwoDice(): JSX.Element {
    // State for the values of two dice
    const [die1, setDie1] = useState(1);
    const [die2, setDie2] = useState(2);

    // Event handler to roll the left die
    const handleRollLeft = () => {
        setDie1(d6());
    };

    // Event handler to roll the right die
    const handleRollRight = () => {
        setDie2(d6());
    };

    return (
        <div className="two-dice-container">
            {/* Container for the left die */}
            <div className="dice-container">
                <span className="die" data-testid="left-die">
                    {die1}
                </span>{" "}
                {/* Display value of left die */}
                <Button className="roll-button" onClick={handleRollLeft}>
                    Roll Left
                </Button>{" "}
                {/* Button to roll left die */}
            </div>
            {/* Container for the right die */}
            <div className="dice-container">
                <span className="die" data-testid="right-die">
                    {die2}
                </span>{" "}
                {/* Display value of right die */}
                <Button className="roll-button" onClick={handleRollRight}>
                    Roll Right
                </Button>{" "}
                {/* Button to roll right die */}
            </div>
            {/* Display win/lose message */}
            <div className="result-message">
                {/* Display win message if both dice have the same value and it's not 1 */}
                {die1 === die2 && die1 !== 1 && (
                    <p className="win-message">You Win!</p>
                )}
                {/* Display lose message if both dice have the same value and it's 1 */}
                {die1 === die2 && die1 === 1 && (
                    <p className="lose-message">You Lose!</p>
                )}
            </div>
        </div>
    );
}
