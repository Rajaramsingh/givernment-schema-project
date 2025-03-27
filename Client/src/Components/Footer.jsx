import React from 'react'

const Footer = () => {
  return (
    <div className='  w-full px-20 py-8 font-["DM Sans"]  bg-blue-800'>

      <div className=''> 
      <span className="text-4xl font-bold">
              <span className="text-blue-600">Gov.</span>
              <span className="text-orange-500">Scheme</span>
            </span>
      <div className='flex justify-around'>
      
      <div className='text-white'>
        <h1 className='py-2 font-medium '>Address</h1>
        <p className='py-2'>Curelink Pvt. Ltd.</p>
        <p>Plot No. 558, Golf Course Rd, Sector 27,</p>
        <p>Gurugram, Haryana 122002</p>
      </div>
      </div>

      <div className='text-white '>
        <h1 className='py-2 font-medium '>Contact</h1>
        <p className='py-2'> <a href="mailto:example@example.com">
        contact@cure.link</a></p>
        <p> <a href="tel:+1234567890">Call +1234567890</a></p>
       
      </div>
      </div>

    </div>
  )
}

export default Footer
