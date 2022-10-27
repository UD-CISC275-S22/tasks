import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left_die, set_dice_left] = useState<number>(1);
    const [right_die, set_dice_right] = useState<number>(6);
    const [result, set_result] = useState<string>("");
    function roll(dice: string): void {
        const new_num = d6();
        if (dice == "left") {
            set_dice_left(new_num);
            if (new_num == right_die) {
                if (new_num == 1) {
                    set_result("lose");
                } else {
                    set_result("win");
                }
            } else {
                set_result("");
            }
        } else {
            set_dice_right(new_num);
            if (new_num == left_die) {
                if (new_num == 1) {
                    set_result("lose");
                } else {
                    set_result("win");
                }
            } else {
                set_result("");
            }
        }
    }
    return (
        <div>
            <div>
                Left die: <span data-testid="left-die">{left_die}</span>
                <Button
                    onClick={() => {
                        roll("left");
                    }}
                >
                    {" "}
                    Roll Left{" "}
                </Button>
            </div>
            <div>
                Right die: <span data-testid="right-die">{right_die}</span>
                <Button
                    onClick={() => {
                        roll("right");
                    }}
                >
                    {" "}
                    Roll Right{" "}
                </Button>
            </div>
            <p>{result}</p>
        </div>
    );
}
