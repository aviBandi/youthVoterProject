import React from 'react'
import testing from "../images/heroPic.png"
const impacts = () => {
    return (
        <div className='max-w-6xl mx-auto pt-8'>
            <h1 className='text-blue-600 text-4xl font-bold text-center pb-5'>Our Impacts</h1>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                <div className='border-[2px] border-black px-4 py-4 rounded-xl shadow-lg'>
                    <p className='text-slate-gray font-montserrat text-md'>
                        Ut repellendus doloribus a accusantium eligendi est ducimus nihil aut numquam voluptas! Sit atque atque est amet quibusdam ut aliquid omnis et facere porro quo quia fugiat et sint quas dicta.
                    </p>
                    <div className="flex items-center gap-x-6 mt-4">
                        <img className="h-16 w-16 rounded-full" src={testing} alt="" />
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-blue-600">Avi Bandi</h3>
                            <p className="text-sm font-semibold leading-6 text-slate-gray">Director</p>
                        </div>
                    </div>
                </div>
                <div className='border-[2px] border-black px-4 py-4 rounded-xl shadow-lg'>
                    <p className='text-slate-gray font-montserrat text-md'>
                        Ut repellendus doloribus a accusantium eligendi est ducimus nihil aut numquam voluptas! Sit atque atque est amet quibusdam ut aliquid omnis et facere porro quo quia fugiat et sint quas dicta.
                    </p>
                    <div className="flex items-center gap-x-6 mt-4">
                        <img className="h-16 w-16 rounded-full" src={testing} alt="" />
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-blue-600">Avi Bandi</h3>
                            <p className="text-sm font-semibold leading-6 text-slate-gray">Director</p>
                        </div>
                    </div>
                </div>
                <div className='border-[2px] border-black px-4 py-4 rounded-xl shadow-lg'>
                    <p className='text-slate-gray font-montserrat text-md'>
                        Ut repellendus doloribus a accusantium eligendi est ducimus nihil aut numquam voluptas! Sit atque atque est amet quibusdam ut aliquid omnis et facere porro quo quia fugiat et sint quas dicta.
                    </p>
                    <div className="flex items-center gap-x-6 mt-4">
                        <img className="h-16 w-16 rounded-full" src={testing} alt="" />
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-blue-600">Avi Bandi</h3>
                            <p className="text-sm font-semibold leading-6 text-slate-gray">Director</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default impacts

// import React from 'react'

// const Impacts = () => {
//   return (
//     <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className='grid grid-cols-1 sm:grid-cols-3'>
//             <div className='mx-auto justify-center'>
//                 <img
//                 className='h-32 w-32 rounded-full'
//                 src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
//                 />
//             </div>
//             <div className='mx-auto justify-center'>
//                 hi
//             </div>
//             <div className='mx-auto justify-center'>
//                 hi
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Impacts
