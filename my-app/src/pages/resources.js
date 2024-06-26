import NavOther from "../components/navOther"
import ResourcesCard from "../components/resourcesCard"
import Footer from "../components/footer"
import { Resources } from "../data"

const resouces = () => {

    return (
        <div className="bg-blue-50 overflow-auto ">

            <NavOther />
            <div className='max-w-5xl mx-auto mb-36 px-6 lg:px-0'>

                <div className='mt-32 mb-16 '>
                    <div className='flex items-center'>
                        <h2 className="text-3xl font-bold text-blue-500">
                            Resources
                        </h2>
                        <hr className="h-0.5 mt-2 rounded-2xl font-bold bg-black flex-1 ml-4"></hr>

                    </div>
                    <h3 className='mt-7 text-gray-700 font-semibold text-lg'>
                        Everything you need to get your voter registration drive started!
                    </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        Resources.map((resource, index) => (
                            <ResourcesCard key={index} docName={resource.name} description={resource.description} image={resource.image} link={resource.link} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default resouces