import { CheckIcon, CloudArrowUpIcon, DocumentCheckIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [


  {
    name: 'In-school events: ',
    description: 'Helping ambassadors host registration events in schools.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Voter Resources: ',
    description: 'Assisting individuals in the registration process.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Youth Advocacy: ',
    description: 'Advocating for young people’s right to vote.',
    icon: DocumentCheckIcon,
  },

]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white pt-24 sm:pt-16 pb-16" id="about">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About The <span className='text-blue-600'>Youth Voter Project</span></p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The Youth Voter Project is a student-led organization dedicated to registering or pre-registering Minnesota’s youth through events run by Student Ambassadors.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div>
                {/*
                <dl className="grid grid-cols-1 pt-7 lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <h2 className="text-base leading-7 text-gray-600">Schools Connected</h2>
                      <h1 className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                        13,000+
                      </h1>
                    </div>

                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <h2 className="text-base leading-7 text-gray-600">Schools Connected</h2>
                      <h1 className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                        13,000+
                      </h1>
                    </div>

                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <h2 className="text-base leading-7 text-gray-600">Schools Connected</h2>
                      <h1 className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                        13,000+
                      </h1>
                    </div>


                </dl> */}


              </div>
            </div>
          </div>
          <img
            src="https://media.11alive.com/assets/WXIA/images/c64e2bd0-78d5-4fb8-b625-4ad37e473165/c64e2bd0-78d5-4fb8-b625-4ad37e473165_1920x1080.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl border-black border-1 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}