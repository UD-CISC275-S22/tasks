import React, { useState } from "react";
import { Button } from "react-bootstrap";


export function RevealAnswer(): React.JSX.Element {
const [revealAnswer, setRevealAnswer] = useState<boolean>(false); //initalize a bool useState
                                            //this component now has a boolean hooked and will persist
                                            //even wehn the app re renders
    function flipVisibility(): void{
        setRevealAnswer(!revealAnswer);    //make a function that changes the state (controller)
                                            //just calls the use on the state
    }

    return (                  
                                
        <span>                                
        <Button onClick ={flipVisibility }>Reveal Answer</Button>
                            
        {revealAnswer && <div>42</div> }      
                {/* //this button is our Controller. Upon clicking it flipVisibility is called
                //and then we check if the booleamn is true using revealAnswer &&
                //meaning the next line only runs if it passes 
                //why does reveal answer conditi9nal and the div have to be wrapped in {}?  OH its bc
                //we trying to make a conditional execution that only rusns
                // command + / */}
        
        </span>
    )
}
