import bg from "../images/heroPic.png"


export default function Hero() {

    const style = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }
    const overlayStyle = {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    }
    return (
        <div className="h-screen w-screen" style={style}>
            <div style={overlayStyle}></div>

            <div className="relative isolate px-6 pt-14 lg:px-8">

                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding.{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div> */}
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-blue-500 sm:text-6xl z-10">
                            The Youth Voter Project
                        </h1>
                        <p className="mt-6 text-xl font-bold leading-8 text-white">
                            Connecting youth to democracy, one voter at a time!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://mnvotes.sos.mn.gov/VoterRegistration/index"
                                target="_blank"
                                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register to Vote <span aria-hidden="true">→</span>
                            </a>
                            <a href="/resources" className="rounded-md border-2 border-blue-600 bg-neutral-50 px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Resources <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
