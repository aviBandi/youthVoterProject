const ResourcesCard = ({docName, description, image, link}) => {
    return (

        <div className="justify-center max-contain">
            <div className="pt-[26px]">
                <a href={link} target="_blank">
                    <div className='flex bg-red-50 h-[187px] justify-center border-spacing-1 border-[1px] rounded-lg border-black hover:-translate-y-1 transition-all hover:border-blue-500 hover:border-2'>
                        <img
                            src={image}
                            className='py-2 px-2 rounded-2xl aspect-video'
                        />
                    </div>
                </a>
                <div className="pt-[4px] px-1">
                    <h1 className="text-blue-500 font-semibold">{docName}</h1>
                    <h2 className="text-gray-700 ">{description}</h2>
                </div>
            </div>
        </div>
    )
}

export default ResourcesCard