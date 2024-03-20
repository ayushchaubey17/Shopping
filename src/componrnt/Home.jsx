import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="mb-10 mx-auto  w-full max-w-7xl">
    <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative   z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                <h2 className="text-4xl font-bold sm:text-5xl">
                    Go For shoping
                    <span className="hidden sm:block text-4xl">Things you want are here</span>
                </h2>

                <Link
                    className="inline-flex  text-white items-center px-6 py-3 font-medium bg-orange-500 rounded-lg hover:opacity-75"
                    to="/more"
                >
                    <svg
                        fill="white"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    >
                        <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                    </svg>
                    &nbsp; Shop now
                </Link>
            </div>
        </div>

        <div className="absolute mt-10 inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img className="w-11/12 mx-auto sm:mx-0 sm:w-1/2 rounded-2xl shadow-lg shadow-blue-200" src="shop.avif" alt="image1" />
        </div>
    </aside>

    <div className="grid place-items-center sm:mt-20 sm:grid-cols-2">
        <img className="sm:w-9/12 w-10/12 h-fit sm:order-2 rounded-md border-2 shadow-lg" src="shop2.avif" alt="image2" />
        <h1 className="text-center text-2xl sm:text-3xl sm:order-1 mx-4 py-10 font-medium">Purchase the thing which you want...</h1>
    </div>

   
</div>
  )
}
