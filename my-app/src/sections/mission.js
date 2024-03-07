import React from 'react'
import testing from "../images/heroPic.png"
const mission = () => {
  return (
    <div className='max-w-4xl mx-auto pt-8'>
      <h1 className='text-blue-600 text-5xl font-bold text-center'>Our Mission</h1>
      <div className='grid grid-cols-2 pt-6 gap-7'>
        <div className='border-2 border-red-600'>
          <h3>
            We are a group of dedicated high schoolers looking to imapct the community of minnestoa to create blah blh blah
            We are a group of dedicated high schoolers looking to imapct the community of minnestoa to create blah blh blah
            We are a group of dedicated high schoolers looking to imapct the community of minnestoa to create blah blh blah
            <div className='grid grid-cols-2 pt-3'>
              <div>
                <h2 className='text-2xl font-semibold text-blue-600'>50,000+</h2>
                <h3 className='text-lg text-slate-700 font-semibold'>Schools Connected</h3>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-blue-600'>50,000+</h2>
                <h3 className='text-lg text-slate-700 font-semibold'>Schools Connected</h3>
              </div>
            </div>
          </h3>
        </div>
        <div className='border-2 border-red-600 mx-auto'>
          <img className='h-full rounded-2xl border-2 border-blue-600 shadow-lg' src={testing} />
        </div>
      </div>
    </div>
  )
}

export default mission
