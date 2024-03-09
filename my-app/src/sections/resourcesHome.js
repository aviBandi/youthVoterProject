import React from 'react'
import testing from "../images/heroPic.png"

const resourcesHome = () => {
    return (
        <div className='max-w-4xl mx-auto pt-8'>
            <div className='grid grid-cols-2 pt-6 gap-7'>
                <div className='mx-auto'>
                    <img className='h-full rounded-2xl border-2 border-blue-600 shadow-lg' src={testing} />
                </div>
                <div className=''>
                    <h1 className='text-blue-600 text-4xl font-bold text-center'>Resources</h1>
                    <h3 className='pt-3 pb-6'>
                        Check out our resources page to find out more about the resources we offer to help you succeed in your academic journey.
                    </h3>
                    <h3 className='px-2 py-2 inline-block text-white bg-red-500 rounded-lg'>Check out our Resources</h3>
                </div>
            </div>
        </div>
    )
}

export default resourcesHome
