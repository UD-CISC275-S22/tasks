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

export function TwoDice(): React.JSX.Element {
    const [leftdie, setLeft] =useState<number>(2)
    const [rightdie, setRight] =useState<number>(3)
   function rollDie(type: string): void{
    //let roll: number = d6();
    if (type == "left-die"){

    setLeft(d6());
    } else if (type== "right-die"){
        setRight(d6());
    }
   }

    return (
        <div>
            <span data-testid = "left-die">
           <Button onClick = {() => {rollDie("left-die")}}>Roll Left</Button>
            {<div>{leftdie}</div>}
            </span>


             <span data-testid = "right-die">
           <Button onClick = {() => {rollDie("right-die")}}>Roll Right</Button>
            {<div>{rightdie}</div>}
            </span>
            {(leftdie== 1 && rightdie==1) && <div>Lose</div> }   
            {(leftdie!= 1 && rightdie!=1) && (leftdie==rightdie) && <div>Win</div> }  
            


            </div>
    )
}
