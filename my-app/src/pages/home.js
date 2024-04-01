import Nav from "../components/nav"
import Hero from "../sections/hero"
import Mission from "../sections/mission"
import ResourcesHome from "../sections/resourcesHome"
import GetStarted from "../sections/getStarted"
import Stats from "../sections/stats"
import Footer from "../sections/footer"
import Impacts from "../sections/impacts"
import TrustedBy from "../sections/trustedby"
const home = () => {
    return (
        <div className="">
            <Nav />
            <Hero />
            <Mission />
            <TrustedBy />
            <ResourcesHome />
            <Impacts />
            {/* <GetStarted /> */}
            {/* <Footer /> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>
    )
}

export default home