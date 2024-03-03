import Nav from "../components/nav"
import heroPic from "../images/heroPic.png"
import ResourcesCard from "../components/resourcesCard"
const resouces = () => {

    return (
        <div>
            <Nav />
            <div className='max-w-5xl mx-auto'>
                <div className='pt-40 flex justify-center items-center'>
                    <h1 className="text-red-600 font-semibold text-4xl font-palanquin">
                        Resources
                    </h1>
                    <br></br>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <ResourcesCard/>
                    <ResourcesCard/>
                    <ResourcesCard/>
                    <ResourcesCard/>
                    <ResourcesCard/>


                </div>
            </div>
        </div>
    )
}

export default resouces