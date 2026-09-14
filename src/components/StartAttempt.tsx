import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
  
   function incrAttempts(): void{
        setAttempts(attempts+1);
   }
   function decrAttempts(): void{
        setAttempts(attempts-1);
   }
    
    return (
        <span>
            
            <div>Attempts: {attempts}</div>
            <Button onClick ={()  => {  setProgress(true) 
                                        decrAttempts()}} disabled = {progress || attempts ==0}>. {/* This logic  (disabled ||) determines wheter the click is allowed*/}
                Start Quiz
            </Button>
            {/* SO theres 2 diff  formats for delayed function calls. If u want to call the function on values u use
            <Button onClick = {()   => {function(params)}   } disabled = {conditions}> Text </Button>
            or if u just want the function to run
            <Button onClick = {Function}> Text </Button>
            then { condition && what to show}
            Main idea: When we have an => inside the first button, we NEED to add a () after each func\
            Theres two ways to initalize a button hook, specific with condiitons and changing states 
            or nonspecific
            */}

            <Button onClick ={() => {setProgress(false)}} disabled ={!progress}>
               Stop Quiz
            </Button>
           <Button onClick = {() => {incrAttempts()}} disabled = {progress}>Mulligan</Button>
            {/*Our initally disabled button. We create a mini function that uses a te,p disabled value
            <Button onClick = {incrAttempts} > Mulligan</Button>
            */}
           



            
        
        </span>
        
      
      
    )
}
