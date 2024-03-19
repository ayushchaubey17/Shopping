import React from 'react'
import B from './B'
import { arr } from './ram'



export default function A() {
  return (
    <div className=''>

     
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    
{
  arr.map(el => <B name={"madhuri dikshit"} ele = {el}/>)
}


    </div>
    </div>
  )
}
