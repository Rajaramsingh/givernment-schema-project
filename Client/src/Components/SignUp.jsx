
import React from 'react';

const SignUp = ({ onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      
      <div
        className='absolute inset-0 bg-black bg-opacity-30'
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className='relative z-10 w-full max-w-lg p-8 bg-white rounded-lg shadow-lg'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-600 text-2xl'
        >
          &times;
        </button>
        <div className='text-center'>
          <h1 className='text-3xl font-bold mb-4'>Get A Free Product Demo!</h1>
          <p className='text-xl mb-6'>
            We will walk you through the product, answer your queries, and guide you on how you can leverage WhatsApp to get new patients and maximize your patient outcomes.
          </p>
          <form className='flex flex-col items-center gap-4'>
            <input
              type='text'
              placeholder='Name'
              className='border rounded-lg p-2 w-full max-w-xs'
            />
            <input
              type='tel'
              placeholder='Mobile Number'
              className='border rounded-lg p-2 w-full max-w-xs'
            />
            <button
              type='submit'
              className='text-xl leading-none text-white font-medium bg-blue-500 rounded-lg p-4'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
