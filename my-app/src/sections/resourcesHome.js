import { CheckBadgeIcon, UserGroupIcon, UserIcon } from '@heroicons/react/20/solid'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Become an Ambassador',
        icon: UserGroupIcon,
        buttonText: "Contact Us!",
        href: "/contact"
    },
    {
        name: 'Individual Voter Registration',
        icon: UserIcon,
        buttonText: "Register to vote!",
        href: ""

    },
    {
        name: 'Other Resources',
        icon: CheckBadgeIcon,
        buttonText: "Register to vote!",
        href: ""


    },
]

export default function ResourcesHome() {
    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto lg:text-center">
                    <div className='flex items-center'>
                        <hr className="h-0.5 mt-2 rounded-2xl bg-red-600 flex-1 mr-4"></hr>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Resources
                        </p>
                        <hr className="h-0.5 mt-2 rounded-2xl bg-red-600 flex-1 ml-4"></hr>
                    </div>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        The Youth Voter Project provides everything you need for a successful voter registration drive.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-16 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-2 lg:gap-y-16">
                        <img src="https://minitex.umn.edu/sites/default/files/styles/manual_crop_16_9/public/Be%20A%20Voter.jpg?itok=BIlS6C6l" />
                        <div className='pt-4'>
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16 pb-5">
                                    <dt className="text-base font-semibold leading-7 text-gray-900 pb-1">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    {/* <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd> */}
                                    <a href={feature.href}>
                                        <button className='border border-red-600 hover:bg-white hover:text-gray-700 rounded-xl border-[2px] inline-block px-4 py-1 bg-red-600 text-white transition-all'>
                                            {feature.buttonText}
                                        </button>
                                    </a>
                                </div>
                            ))}
                        </div>

                    </dl>
                </div>
            </div>
        </div>
    )
}
