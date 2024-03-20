import React, { useState } from 'react'
import C from './C'
import { arr2 } from './ram';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function B({ele}) {

let [add,setAdd] = useState("Add to cart");
let hide= ele.qty==0?"hidden":"";

let [index, setIndex] = useState(1);
let bndl = (index==0)?"hidden":"bg-sky-500";
let bndr = (index==2)?"hidden":"bg-sky-500";

let fun1 = ()=>{
  arr2.push(ele);
  setAdd("Added");
  console.log(--ele.qty)
  setTimeout(() => {
    setAdd("Add to cart")
  }, 600);

  
}


let left = ()=>{
  if(index>=1)setIndex(--index);
  
  console.log(i)
}
let right= ()=>{
  if(index<=1)setIndex(++index);
  console.log(i)
}

  return (
    <div className=''>
      <div className=" border-2 w-full shadow-lg rounded-md bg-slate-500  shadow-blue-100  p-4">
        <h1 className="font-bold">mk</h1>
        <div className=" flex items-center ">
         <button onClick={left} className= {`h-fit p-2 ${bndl} rounded-full`}><ChevronLeftIcon/></button>
        <img  className="hover:scale-105 hue-rotate-30 hover:hue-rotate-0  transition-all duration-1000  w-10/12 h-96 mx-auto rounded-md border-2 shadow-lg shadow-black" src={ele.url[index]} alt=""  />
        <button onClick={right} className={`h-fit p-2 ${bndr} rounded-full`}><ChevronRightIcon/></button>

        </div>
        
       <h1 className="font-bold">Quantity: {ele.qty}</h1>
       <button onClick={fun1} className={` ${hide} bg-blue-500 font-bold text-white rounded-md p-2`}>
        {add}
       </button>
       <button className={` ${ele.qty==0?"":"hidden"} bg-orange-500 hover:bg-orange-200 text-white rounded-md p-2`}>
         Notify soon
       </button>
      <h1 className=" p-4 ml-4 text-center font-bold ">price: <span className='font-bold text-white'> &#8377;{ele.price}</span></h1>
   
      </div>
     
    </div>
  )
}
