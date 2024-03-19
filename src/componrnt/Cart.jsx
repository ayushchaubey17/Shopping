import React, { useState } from "react";
import { arr2 } from "./ram";
import CartComponent from "./CartComponent";

export default function Cart() {
  let [arr3, setArr3] = useState(arr2);
  let [show,setShow] = useState(false);
  let n = arr3.length;
  let cartsms = n == 0 ? "your cart is empty" : "your card is ready here";

  let sum = 0;
  for (let i of arr3) {
    sum += i.price;
  }

  let clear = () => {
    console.log("delete");
    setArr3([]);
    arr2.length = 0;
    console.log(arr3);
  };


  let pay = ()=>{
setShow(true);
  }
  return (
    <div>
      <h1 className="">{cartsms}</h1>
      <p>{n} items in cart</p>

      <div className={`${n == 0 ? "hidden" : ""}`}>
        {n != 0 && (
          <button
            onClick={clear}
            className="bg-orange-500 p-3 my-4 text-white rounded-md ml-4"
          >
            clear All
          </button>
        )}

        <div
          className={`grid ${
            n == 0 ? "hidden" : ""
          } grid-col-1 sm:grid-cols-2 gap-6`}
        >
          {arr3.map((el) => (
            <CartComponent el={el} />
          ))}

         
        </div>
        <div className="">
            <h1 className="font-bold p-2">checkout: &#8377; {sum}</h1>
          </div>
        <nav className="flex justify-center my-4">
          <button onClick={pay} className="bg-blue-600 p-2 font-bold text-white rounded-md w-10/12  ">
            Pay Now
          </button>
        </nav>

        <img src="scanner.jpg" alt="" className={`mx-auto ${show?"":"hidden"} sm:h-80`} />
      </div>
    </div>
  );
}
