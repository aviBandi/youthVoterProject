import heroPic from "../images/heroPic.png"

const ResourcesCard = () => {
    return (

        <div className="justify-center max-contain">
            <div className="pt-[26px]">
                <div className='flex bg-red-50 h-[187px] justify-center border-spacing-1 border-[1px] rounded-lg border-slate-gray'>
                    <img
                        src={heroPic}
                        className='py-2 px-2 rounded-2xl aspect-video'
                    />
                </div>
                <div className="pt-[4px] flex">
                    <h1 className="text-red-600 inline-block">Setting up</h1>
                    {/* <h1 className="text-gray-700 flow" style={{ whiteSpace: 'nowrap' }}>: Hola coma estas blah blah blah blah</h1> */}
                </div>
            </div>
        </div>
    )
}

export default ResourcesCard