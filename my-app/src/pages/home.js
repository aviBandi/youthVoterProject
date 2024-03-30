import Nav from "../components/nav"
import Hero from "../sections/hero"
import Mission from "../sections/mission"
import ResourcesHome from "../sections/resourcesHome"
import Impacts from "../sections/impacts"
import GetStarted from "../sections/getStarted"
import Stats from "../sections/stats"
import TrustedBy from "../sections/trustedby"
const home = () => {
    return (
        <div className="">
            <Nav />
            <Hero />
            <TrustedBy />
            <Mission />
            <Stats />
            <ResourcesHome />
            <Impacts />
            <GetStarted />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>
    )
}

export default home