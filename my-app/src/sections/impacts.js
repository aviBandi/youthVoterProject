import React from 'react'

const impacts = () => {

    const Testimonials = [
        {
            name: 'Scoootty Giengier',
            role: 'WHS person',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg',
            testimonial: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
        },
        {
            name: 'Avinash Bandi',
            role: 'Software Engineer',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg',
            testimonial: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
        },
        {
            name: 'Markus Wessman',
            role: 'Future POTUS',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg',
            testimonial: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
        }
    ]

    return (
        <div className='bg-blue-100 overflow-hidden'>
            <div class="container my-24 mx-auto md:px-6 max-w-5xl">
                <section class="mb-32 text-center">
                    {/* <div className='flex items-center'>
                        <hr className="h-0.5 mt-2 rounded-2xl bg-blue-600 flex-1 mr-4"></hr>
                        <h2 class="mb-12 text-3xl font-bold text-black">Impacts we have Made!</h2>
                        <hr className="h-0.5 mt-2 rounded-2xl bg-blue-600 flex-1 ml-4"></hr>
                    </div> */}
                    <div className='flex items-center pb-12'>
                        <hr className="h-0.5 mt-2 rounded-2xl bg-blue-600 flex-1 mr-4"></hr>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Impacts we have Made!
                        </p>
                        <hr className="h-0.5 mt-2 rounded-2xl bg-blue-600 flex-1 ml-4"></hr>
                    </div>
                    <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">

                        {
                            Testimonials.map((testimonial) => (
                                <div>
                                    <div class="mb-12 md:mb-0">
                                        <div class="mb-6 flex justify-center">
                                            <img src={testimonial.image}
                                                class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                                        </div>
                                        <h5 class="mb-2 text-lg font-bold text-gray-700">{testimonial.name}</h5>
                                        <h3 class="mb-4 font-semibold text-blue-600">
                                            {testimonial.role}
                                        </h3>
                                        <div class="mb-4">
                                            <p className='text-gray-600'>
                                                {testimonial.testimonial}
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            ))

                        }

                    </div>
                </section>
            </div>
        </div>
    )
}

export default impacts
