import React, { useState } from 'react'

let a = [1,2,3,4];

let b = [...a,];
console.log(b)

let obj = {
  a:"ayusg",
  b:10
}

let obj2 = {
  c:"chaubey",
  b:20
}

let newObj = {...obj,...obj2};
console.log(newObj)

export default function UseState() {
 let [count1 ,setCount1] = useState(0);


 let rama = ()=>{
    setCount1(count1+5)
    setCount1(count1+3)
 }



  return (
    <div>
        <h1>{count1}</h1>
        <button onClick={rama}>inc</button>
      hyy i am a UseState hook
    </div>
  )
}
