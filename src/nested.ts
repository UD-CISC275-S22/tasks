import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQues = questions.filter((ques: Question): boolean => ques.published,);
  // console.log(questions);
   //const unseenMovies = ghibliMovies.filter((movie: Movie): boolean => !movie.seen,);
    
    //we use [...oldThing] wehnwe only want to copy an array with no array ooperators
    return publishedQues;
}



/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter((ques: Question): boolean =>  (ques.body != '' || ques.expected != '') || ( ques.options.length != 0));
    //An empty array fails all of these options so a non empty one should pass atleast one -> ||
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundQ = questions.find((ques: Question): boolean => ques. id == id);
    if (foundQ == undefined){
        return null;
    }
    return foundQ;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const notThatId = questions.filter((ques: Question): boolean => ques.id != id);
    return notThatId;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const theNames = questions.map((ques: Question): string =>  ques.name);
    return theNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sumQues= questions.reduce((currSum: number, ques: Question): number => currSum + ques.points, 0)
    //always make sure the number goes first or else reduce fails
    return sumQues;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const getPub = questions.filter((ques: Question): boolean => ques.published);
    const pubSum = getPub.reduce((currTotal: number, que: Question): number => currTotal + que.points, 0);
    return pubSum;
    //array.splice (pos, value, amt to replace) used to insert at a specific ifx
    /*
        Map converts each single value in an array to a single value
    Filter removes values in an array using conditionals
    Map+ a ? 9 (rmb means else) changes SOME of the values in an an array
R   educe is used to update, inside the loop, an in-progress variable defined outside of the loop

    */
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published"; //first make the headers
    const newCSV = questions.map((ques: Question): string => ques.id + "," + ques.name + "," + ques.options.length + "," + ques.points + "," + ques.published).join("\n");
     return header+ "\n" + newCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    //to convert an interface to a diff we need to map and use {} to wrap everything 
    const toAnswer = questions.map((ques: Question): Answer =>  ({
                        questionId: ques.id,
                        text: '',
                        submitted: false,
                        correct: false
                        //if were coping a nested data (like an array we must do 
                        //text: question.text.map((t: string): string => {...t}))
                        //just a map that calls the spread operator on the value ur trying to copy and uses it as the field

                    
                    })        
            
                )

        return toAnswer;
}
//to convert an interface to a diff we need to map and use ({}) to wrap everything 
//to just change a field of an obj we wrap the map body in a {}, iuse ({...obj, fieldtoChange: newStatus})
//
/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const pubAll = questions.map((ques: Question): Question => ({...ques, published: true}) );
    return pubAll;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length ==0){
        return true;
    }
    let firstType: QuestionType = questions[0].type;
   // const not = false;
   
    const allType = questions.every((question: Question): boolean => question.type == firstType)
    return allType;
  
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQ = questions.map((ques: Question): Question => ques)
    newQ.push(makeBlankQuestion(id, name, type));
    return newQ;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const changeTarget = questions.map((ques: Question): Question => ques.id == targetId ? ({...ques, name: newName }): ques);
    return changeTarget;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const changeAgain = questions.map((ques: Question): Question => 
        ques.id == targetId ? ({...ques, type: newQuestionType}) : ques, 
     //   Option: newQuestionType == 'multiple_choice_question' ? 
     );
      //  Option: newQuestionType != 'multiple_choice_question' ? [] : ques.options )     
      
      
    const checkqType = changeAgain.map((ques: Question): Question => 
        (ques.id == targetId  && newQuestionType != 'multiple_choice_question') ? ({...ques, options: []}): ques );
    return checkqType;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */

   
 
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const changeTarget = questions.map((ques: Question): Question =>
        ques.id == targetId ? {...ques, options: targetOptionIndex == -1 ? [...ques.options, newOption] //if -1 push
                           
        : ques.options.map((option: string, index: number): string => index == targetOptionIndex ? newOption: option)} 
        
        : ques//otherwise replace
                //using  and a second paramater auto iterates so we map like normal and 
                // push the newOption if the idx is the same                                                        //lastly have normal return
);              //spllice muatets the array so we must use with
                    //push returns a number so we need to add using spread 

                    //I messed up bc I was returning a number by using push and not wrapping the options clone in []

    return changeTarget;
}
///ques.options.with(targetOptionIndex, newOption) }: ques  

//function checkId()

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
    //let dup: Question = duplicateQuestion(newId, )
): Question[] {
    const findMatch = questions.find((ques: Question): Boolean => ques.id == targetId );
    const findIdx = questions.findIndex((ques: Question): Boolean => ques.id == targetId );
    const newArray = questions.map((ques: Question): Question => ques);
    if (findMatch != undefined){
   newArray.splice(findIdx+1,0, duplicateQuestion(newId, findMatch));

    
   
    }
    return newArray;
  

}

/*

const mycityRestaurants = {...restaurants} is still a shallow copies
so const myCityRestaurnts[3].menu[1]. name = 'Tofu';
//Nested data like like objects 9restaurants) will still r efer to each other. So changing the copied arrays'
// restaurant at index 0 will change the original arrays value too.


// We need a true "deep copy"
const deepCopy = ghibliMovies.map((movie: Movie): Movie => ({ ...movie })); neeed parenthesis wrapping {} to say ur making a new obj not functon and return as the onj

heres an ex of this implemented in

const myCityRestaursnts = restaurants.map(r => ){

return {..r, menu: r.menu.map(menutItem:):  => ({...menuItem})}
}
or const newMenu = r.menu.map(menuItem) => ({...menuItem})
and return {..r, newMenu}
main idea; 
if ur copying over nested data and want to update  field u need to map through the field and apply a deep copy
This makes a new array of each object in that field and 



Flatmap flattens arrays 9turns a matrix or arrays of arrays with nested references into a 1D aray
const result = arr.flattMap

Structured clone does the same thng
*/