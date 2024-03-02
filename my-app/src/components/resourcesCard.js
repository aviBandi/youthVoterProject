import heroPic from "../images/people.jpg"

const ResourcesCard = () => {
    return (

        <div className=" justify-center">
            <div className='flex bg-red-50 h-[187px] justify-center border-spacing-1 border-[1px] rounded-lg border-slate-gray'>
                <img
                    src={heroPic}
                    className='py-2 px-2 rounded-2xl aspect-video'
                />
            </div>
            <div className="flex">
                <h1 className="text-red-600 inline-block">Setup</h1>
                <h2 className="text-slate-gray">: blah blah blah</h2>
            </div>
        </div>
    )
}

export default ResourcesCard