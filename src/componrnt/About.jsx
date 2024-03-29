import React from 'react'

export default function About() {
  return (
    <div className="py-4  mb-0 bg-white">
      
      <h1 className="text-center py-12 font-bold text-3xl underline space-y-3">About me</h1>
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className=" md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
                <img
                    src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                    alt="image"
                />
            </div>
            <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                    I am completing my graduation
                </h2>
                <p className="mt-6 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                    accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                    aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                </p>
                <p className="mt-4 text-gray-600">
                    Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                    Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}
