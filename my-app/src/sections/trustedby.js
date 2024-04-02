export default function TrustedBy() {
  const workedWith = [
    {
      name: 'Transistor',
      image: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
      link: 'https://transistor.fm'
    },
    {
      name: 'Reform',
      image: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
      link: 'https://reform.app'
    },
    {
      name: 'Tuple',
      image: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
      link: 'https://tuple.app'
    },
    {
      name: 'SavvyCal',
      image: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg',
      link: 'https://savvycal.com'
    },
    {
      name: 'Statamic',
      image: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
      link: 'https://statamic.com'
    }
  ]
  return (
    <div className="bg-blue-100 py-12 sm:py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the Minnesota's Largest High Schools
          </h2> */}
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {
            workedWith.map((company, index) => (
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={company.image}
                alt={company.name}
                width={158}
                height={48}
              />
            ))
          }
          {/* <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            /> */}
        </div>
      </div>
    </div>
  )
}
