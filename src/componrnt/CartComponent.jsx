import React from 'react'

export default function CartComponent({el}) {

  return (
    <div>
      <div className="mx-auto border-2 p-2 rounded-md w-11/12  ">
        <div className="flex justify-between">
            
            <img src={el.url[1]} alt="" className="h-32 w-56 rounded-full" />
            <div className="w-9/12 p-6">
                <h1>price: <span className="font-bold"> &#8377;{el.price}</span></h1>
            </div>
        </div>

      </div>

      
    </div>
  )
}
