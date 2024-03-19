import React,{useReducer} from 'react'

let initialState = 0;
let reducerFunction = (state,action)=>{
    switch (action) {
        case "inc":
            
            return state+1;
    
       case "dec": return state -1;
       case "no" : return initialState;
        default :return state
    }

}

export default function UseReducer() {

    let [count , dispatch] = useReducer(reducerFunction,initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() =>dispatch('inc')}>inc</button>
      <button onClick={()=> dispatch('dec')}>dec</button>
      <button onClick={()=>dispatch('no')}>reset</button>

    </div>
  )
}
