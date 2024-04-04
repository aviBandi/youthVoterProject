export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-5xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-red-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Register your school today!
                <br />
                
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Be the difference you want to see in your school! Become an ambassador today!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md border border-red-600 border-[2px] bg-red-600 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-100 transition hover:text-gray-700"
                >
                  Join Us!
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://edsource.org/wp-content/uploads/2018/09/Polaris05656432.jpg"
                alt="App screenshot"
                width={1824}
                height={1026}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  