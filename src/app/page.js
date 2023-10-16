
"use client"
import React from 'react'
import Show from './Pop/Show'
import { useState } from 'react'
import Inner from './Pop2/Inner'


const page = () => {
  const [model, setmodel] = useState(false)
  const [submittedData, setSubmittedData] = useState({ name: '', email: '', address: '' });
  const openResult = (data) => {
    setSubmittedData(data)
  }
  return (
    <>
      <div className='text-center p-5'>
        <h1 className='text-3xl'>Hey You Just Click The Button</h1>
        <button className='text-white bg-blue-500 hover:bg-slate-500 font-medium text-sm rounded px-5 py-2 text-center mr-5 mt-3'
          onClick={() => setmodel(true)}>
          Click here</button>




      </div>
      <Show isVisible={model} onClose={() => setmodel(false)} onSubmit={openResult}>

        <div className='p-3'>
          <h3 className='text-xl font-semibold text-gray-600 mb-5 text-center'>HEY NOW YOU HAVE SHOW POP-UP IN WINDOW</h3>
          <p className='mb-3 font-semibold text-gray-600'>Hello, Myself Saumya , Naam To Suna Hoga
            Thank you for watching this, I hope it made you smile,
            And if you've learned something new, that's all worth the while.".
          </p>
          <p className="text-gray-800 font-medium font-serif">React code likhte likhte, time fly karta hai,
            Bugs ka picha karte karte, developer hi rasta hai.
            UI components ke saath, creativity ka khel hai,
            React se pyaar, developer ka zamaana hai!
          </p>




        </div>


        <Inner data={submittedData} />
      </Show>



    </>

  )
}

export default page