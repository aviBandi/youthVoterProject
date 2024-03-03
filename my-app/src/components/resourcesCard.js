import heroPic from "../images/heroPic.png"

const ResourcesCard = () => {
    return (

        <div className="justify-center max-contain">
            <div className="pt-[26px]">
                <a className="">
                    <div className='flex bg-red-50 h-[187px] justify-center border-spacing-1 border-[1px] rounded-lg border-slate-gray hover:border-blue-500 hover:border-2'>
                        <img
                            src={heroPic}
                            className='py-2 px-2 rounded-2xl aspect-video'
                        />
                    </div>
                </a>
                <div className="pt-[4px] flex px-1">
                    <h1 className="text-red-600 inline-block font-semibold">Setting up</h1>
                </div>
            </div>
        </div>
    )
}

export default ResourcesCard