import incrementNumber from "../functions/updateFirebase";
import bg from "../images/heroPic.jpeg";

export default function Hero() {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.7)",
  };

  return (
    <div className="h-screen w-screen relative" style={style}>
      <div style={overlayStyle}></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full px-6 sm:px-8 lg:px-24 text-left">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug">
            Empower the Future <br /> With Your Vote
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Be the change you want to see. Join us in encouraging youth to participate in democracy and shape a better tomorrow.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start lg:items-center gap-4">
            <a
              href="https://mnvotes.sos.mn.gov/VoterRegistration/index"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-base sm:text-lg font-semibold text-white hover:from-orange-500 hover:to-red-500 transition-all transform hover:scale-105"
              onClick={incrementNumber}
            >
              Get Started
            </a>
            <a
              href="/resources"
              className="inline-block rounded-full border-2 border-white px-6 py-3 text-base sm:text-lg font-semibold text-white hover:bg-white hover:text-black transition-all transform hover:scale-105"
            >
              Explore Resources
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="bg-white bg-opacity-10 p-6 sm:p-8 rounded-lg shadow-lg backdrop-blur-md">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Your Vote Matters
            </h2>
            <p className="text-gray-200 text-sm sm:text-base">
              Join millions of young voters who are making their voices heard. Every vote counts towards shaping the policies and leaders of tomorrow.
            </p>
            <a
              href="#about"
              className="inline-block mt-6 rounded-full bg-white text-black px-5 py-3 font-semibold transition-all hover:bg-gray-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}