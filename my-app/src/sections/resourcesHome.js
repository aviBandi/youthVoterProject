import { CheckBadgeIcon, UserGroupIcon, UserIcon } from '@heroicons/react/20/solid'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'School Registration Resources',
        icon: UserGroupIcon,
        buttonText: "Register your school!"
    },
    {
        name: 'Individual Voter Registration',
        icon: UserIcon,
        buttonText: "Register to vote!"
    },
    {
        name: 'Other Resources',
        icon: CheckBadgeIcon,
        buttonText: "Register to vote!"
    },
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Resources
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-2 lg:gap-y-16">
                        <img src="https://minitex.umn.edu/sites/default/files/styles/manual_crop_16_9/public/Be%20A%20Voter.jpg?itok=BIlS6C6l"/>
                        <div className='pt-4'>
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16 pb-5">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    {/* <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd> */}
                                    <h1 className='border border-1'>
                                        {feature.buttonText}
                                    </h1>
                                </div>
                            ))}
                        </div>

                    </dl>
                </div>
            </div>
        </div>
    )
}
