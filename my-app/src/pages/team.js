import React from 'react'
import Nav from '../components/nav'
import TeamCard from '../components/teamCard'

const team = () => {
    return (
        <div>
            <Nav />
            <div className='max-w-3xl mx-auto'>
                <div className='pt-40'>
                    <div>
                        <h1 className='text-red-600 font-semibold text-4xl font-palanquin text-center'>Meet the Team</h1>
                        <h3 className='pt-3 text-xl text-center text-gray-700'>Meet the group of dedicated high school seniors looking to make an impact on democracy!</h3>

                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                            <TeamCard />
                            <TeamCard />
                            <TeamCard />

                        </div>
                    </div>


                    {/* <div className='flex items-center justify-center'>
                        <h1 className="text-red-600 font-semibold text-4xl font-palanquin text-center">
                            Meet the Team
                        </h1>
                        <h3 className='text-xl pt-5 text-gray-700'>Meet the group of dedicated high school seniors looking to make an impact on democracy!</h3>
                    </div>
                    <div>

                        <div className='grid grid-cols-1 sm:grid-cols-3'>
                            < TeamCard />
                            < TeamCard />
                            < TeamCard />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default team
