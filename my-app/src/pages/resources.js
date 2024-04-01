import NavOther from "../components/navOther"
import heroPic from "../images/heroPic.png"
import ResourcesCard from "../components/resourcesCard"
import Footer from "../sections/footer"
const resouces = () => {

    return (
        <div className="bg-blue-50 overflow-auto ">

            <NavOther />
            <div className='max-w-5xl mx-auto mb-36 px-6 sm:px-0'>

                <div className='mt-32 mb-16 '>
                    <div className='flex items-center'>
                        <h2 className="text-3xl font-bold text-blue-500">
                            Resources
                        </h2>
                        <hr className="h-0.5 mt-2 rounded-2xl font-bold bg-black flex-1 ml-4"></hr>

                    </div>
                    <h3 className='mt-7 text-gray-700 font-semibold text-lg'>
                        All the infomation you need to get your voter registration drive a massive kickstart!
                    </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <ResourcesCard docName="Avi is Cool" description="best Junior VP wHS has ever seen" image={heroPic}/>
                    <ResourcesCard docName="Avi is Cool" description="best Junior VP wHS has ever seen" image={heroPic}/>
                    <ResourcesCard docName="Avi is Cool" description="best Junior VP wHS has ever seen" image={heroPic}/>
                    <ResourcesCard docName="Avi is Cool" description="best Junior VP wHS has ever seen" image={heroPic}/>
                    <ResourcesCard docName="Avi is Cool" description="best Junior VP wHS has ever seen" image={heroPic}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default resouces