import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [cycleHoliday, setCycleHoliday] = useState<string>("🎁"); //in


     let Holidays:  string[] =["🎁", "🥚🐇", "👻", "🍗", "❤️"];
     let byYear: string[] = ["❤️",  "🥚🐇", "👻", "🍗", "🎁" ];
    
   //  let yearBool: boolean = false;
    function setHolidayAlphabet(): void{

        const getHolIndex = Holidays.findIndex((hol: string): boolean  => hol == cycleHoliday );
        if (getHolIndex == 4){
             setCycleHoliday (Holidays[0]);
        
        } else{
        setCycleHoliday (Holidays[getHolIndex+1]);

        }
      
    }

    function setHolidayYear(): void{
        const getHolIndex = byYear.findIndex((hol: string): boolean => hol == cycleHoliday );
        if (getHolIndex == 4){
            setCycleHoliday(byYear[0]);
        
        } else{
            setCycleHoliday(byYear[getHolIndex+1]);

        }
    }
  

    
    return (
     <span>
    <Button onClick = {setHolidayAlphabet}>Advance by Alphabet</Button>
        
      

        {/* we only had cycleHoliday/condition  && if it was a boolean condition coommand + \ 
        r,b that {function} is a way to create  delayed execution that only runs when the button is clicked*/}
    <Button onClick = {setHolidayYear}> Advance by Year</Button>
        { <div>Holiday: {cycleHoliday} </div>}
         {/* My issue was that I thought a  div being under a button meant it was 'hooked' to it
         And so clicking that specifc button would ONLY change the div under it
         However, both divs were being updated to the result fo whicever button was clicked
         The solution? Only have one display. They click a button and the display is updated to the sort */}
     
        
    </span>
    );
}
