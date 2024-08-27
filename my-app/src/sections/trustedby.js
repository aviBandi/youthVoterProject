import { blaine, lakevilleNorth, hopkins } from "../images"

export default function TrustedBy() {
  const workedWith = [
    {
      name: 'Wazaata Public Schools',
      image: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1629749662/wayzatak12mnus/mclyh0dekeewz2rfkcur/WayzataPublicSchoolsLogo2021.png',
      link: 'https://transistor.fm'
    },
    {
      name: 'Hopkins Public Schools',
      image: blaine,
      link: 'https://reform.app'
    },
    {
      name: 'Burnsville',
      image: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1611558969/isd191org/xo5kip62mmbzfbe7u7zb/BHS_logo.eps',
      link: 'https://tuple.app'
    },
    // {
    //   name: 'Lakeville North',
    //   image: lakevilleNorth,
    //   link: 'https://savvycal.com'
    // },
    // {
    //   name: 'Statamic',
    //   image: test2,
    //   link: 'https://statamic.com'
    // }
  ]
  return (
    <div className="bg-blue-100 py-12 sm:py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold leading-8 text-gray-900 mb-8">
              Ambassadors representing some of minnesotas largest schools!
          </h2>
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {
            workedWith.map((company, index) => (
              <img
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src={company.image}
                alt={company.name}
                width={158}
                height={48}
              />
            ))
          }
          <img
              className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
              src={hopkins}
              alt="Wayzata"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
              src={lakevilleNorth}
              alt="Reform"
              width={158}
              height={48}
            />
            {/* <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1611558969/isd191org/xo5kip62mmbzfbe7u7zb/BHS_logo.eps"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={lakevilleNorth}
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
