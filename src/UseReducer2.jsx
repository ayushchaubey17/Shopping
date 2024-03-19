import React, { useReducer } from 'react'

let initialState1 =0;
let reduceIt = (state,action)=>{
        switch (action) {
            case "inc":
                
                return state+5 ;
        
            case "dec": return state - 5;
            case "inc10": return state  + 10;


            case "no" : return initialState1;

            default : return state;
        }
      

}



export default function UseReducer2() {
   let [count,dispatchFun] = useReducer(reduceIt,initialState1);
  return (
    <div>
          <h1>{count}</h1>
          <button onClick={()=>{dispatchFun("inc")}}>add</button>
          <button onClick={()=>{dispatchFun("dec")}}>sub</button>
          <button onClick={()=>{dispatchFun("no")}}>neutral</button>
          <button onClick={()=>{dispatchFun("inc10")}}>add 10</button>
    </div>
  )
}
