import React, { useState } from 'react';

const Show = ({ isVisible, onClose, children, onSubmit }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name,email, address });
  };

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      id="wrapper"
      onClick={handleClose}
    >
      <div className='w-[600px] flex flex-col'>
        <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
        <div className='bg-white p-1 rounded'>
          {children}

          <form className='ml-5' onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Enter Your Name</h3>
            <input
              type='text'
              value={name} // Use value to set the input field's value
              placeholder='Enter Your name'
              className='p-2 border-2 border-rose-600 rounded :'
              onChange={(e) => setName(e.target.value)} required // Use value to update state
            />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Enter Your E-mail</h3>
             <input
              type='email'
              value={email} // Use value to set the input field's value
              placeholder='Enter Your e-mail'
              className='p-2 border-2 border-rose-600 rounded :'
              onChange={(e) => setemail(e.target.value)} required // Use value to update state
            />

            <h3 className="text-xl font-semibold text-gray-600 mb-2">Something About</h3>
            <textarea
              value={address} // Use value to set the textarea's value
              placeholder='Enter Details about'
              className='p-2 border-2 border-rose-600 rounded'
              onChange={(e) => setAddress(e.target.value)} // Use value to update state
            />
            <br/>
            <button className='p-2 bg-red-500 hover:bg-cyan-950 text-white text-center rounded-md mb-4 w-20 h-8 '>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Show;
