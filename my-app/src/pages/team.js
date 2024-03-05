import React from 'react'
import Nav from '../components/nav'
import TeamCard from '../components/teamCard'

const team = () => {
    const team = [
        {
            name: "Markus Wessman",
            title: "Executive Director",
            linkedinLink: "hpttslslkdfjs;dlkf"
        },
        {
            name: "Markus Wessman",
            title: "Executive Director",
            linkedinLink: "hpttslslkdfjs;dlkf"
        },
        {
            name: "Markus Wessman",
            title: "Executive Director",
            linkedinLink: "https://github.com/aviBandi/aviPortfolioWebsite/blob/main/my-app/src/components/Testimonial.js"
        }
    ]
    return (
        <div>
            <Nav />
            <div className='max-w-3xl mx-auto'>
                <div className='pt-40'>
                    <div>
                        <h1 className='text-red-600 font-semibold text-4xl font-palanquin text-center'>Meet the Team</h1>
                        <h3 className='pt-3 text-xl text-center text-gray-700'>Meet the group of dedicated high school seniors looking to make an impact on democracy!</h3>

                        <div className='pt-7 grid grid-cols-1 sm:grid-cols-3 gap-5'>

                            {

                                team.map((member) => (
                                    < TeamCard name={member.name} title={member.title} linkedinLink={member.linkedinLink}/>
                                ))
                            }
                            {/* <TeamCard />
                            <TeamCard />
                            <TeamCard /> */}

                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default team
