import React from 'react'

const Inner = ({data}) => {
  return (
    <div className="p-4 border  bg-black text-white rounded-xl">
        <h2 className="text-xl font-semibold">Submitted Data</h2>
        <p className="text-gray-600 text-xl">Name: {data.name}</p>
        <p className="text-gray-600 text-xl">E-mail: {data.email}</p>
        <p className="text-gray-600 text-xl">Address: {data.address}</p>
    </div>
    
  )
}

export default Inner 