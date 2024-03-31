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
        <div>
            <div class="container my-24 mx-auto md:px-6 max-w-5xl">
                <section class="mb-32 text-center">
                    <h2 class="mb-12 text-3xl font-bold">Testimonials</h2>
                    <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">

                        {
                            Testimonials.map((testimonial) => (
                                <div>
                                    <div class="mb-12 md:mb-0">
                                        <div class="mb-6 flex justify-center">
                                            <img src={testimonial.image}
                                                class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                                        </div>
                                        <h5 class="mb-2 text-lg font-bold">{testimonial.name}</h5>
                                        <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                                            {testimonial.role}
                                        </h6>
                                        <p class="mb-4">
                                            {testimonial.testimonial}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
                                                <path fill="currentColor"
                                                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                            </svg>
                                        </p>

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
