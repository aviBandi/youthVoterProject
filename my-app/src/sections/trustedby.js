export default function TrustedBy() {
  const workedWith = [
    {
      name: 'Wazaata Public Schools',
      image: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1629749662/wayzatak12mnus/mclyh0dekeewz2rfkcur/WayzataPublicSchoolsLogo2021.png',
      link: 'https://transistor.fm'
    },
    {
      name: 'Reform',
      image: 'https://mail.google.com/mail/u/0?ui=2&ik=797555f0c0&attid=0.1&permmsgid=msg-a:r508101453115347670&th=18eaa44d24885861&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9sChzFEGeVyr-XOVa7yA24tKcHCfUfPuZwObod1_rcH6abjnmDAVztx1Zy2uNab3Qcdha78tG7JTEes-XdVBhYEkOyYjB1b5A_XKBSimOKFzWQfvMHGn8ydiQ&disp=emb&realattid=ii_luljlfbe0',
      link: 'https://reform.app'
    },
    {
      name: 'Burnsville',
      image: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1611558969/isd191org/xo5kip62mmbzfbe7u7zb/BHS_logo.eps',
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
