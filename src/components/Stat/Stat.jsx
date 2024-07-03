import pie from '../../assets/pie.png'
import badge from '../../assets/badge.png'
import groupPics from '../../assets/groupspic.png'
import round from '../../assets/round.png'
import camera from '../../assets/camear.png'
import { FaStar } from 'react-icons/fa';

const Stat = () => {
    return (
        <div className="mt-16 grid grid-cols-5 gap-6">
            {/* first div */}
            <div className='col-span-1 p-2 mt-auto border border-[#02004333] rounded-lg shadow-lg h-[312px] w-[216]'>
                <div className=" ">
                    <h3 className="text-4xl inter-700">90%</h3>
                    <p className="mt-4 inter-500">Patient satisfaction rate, reflecting our commitment.</p>
                    <div className="flex justify-center mt-4">
                        <img src={pie} alt="" />
                    </div>
                </div>
            </div>
            {/* second div */}
            <div className='col-span-3'>
                <h2 className='text-5xl inter-700 text-center'>Comprehensive Care  for Every Patient</h2>
                <div className='grid grid-cols-3 gap-6'>

                    <div className="bg-[#fffff5] h-[200px] w-[216] p-2 rounded-lg shadow-lg border border-[#02004333] mt-auto">
                        <h3 className="text-4xl inter-700">500+</h3>
                        <p className="mt-2 inter-500">Board-certified doctors</p>
                        <div className="flex justify-center">
                            <img src={badge} alt="" />
                        </div>
                    </div>

                    <div className="bg-[#fbfbfb] p-2 rounded-lg shadow-lg h-[162px] w-[216] border border-[#02004333] mt-auto">

                        <div className='flex'>
                            <h3 className="text-4xl inter-700">4.8

                            </h3>
                            <FaStar className='text-yellow-400 text-4xl' />
                        </div>
                        <p className="mt-2 inter-500">Over 20,000 Patient</p>

                        <div className="mt-2">
                            <img src={groupPics} alt="" />

                        </div>
                    </div>

                    <div className="bg-[#fffff5] h-[200px] w-[216] p-2 rounded-lg shadow-lg border border-[#02004333]">
                        <h3 className="text-4xl inter-700">$5000</h3>
                        <p className=" text-gray-600 mt-2 inter-500">Money spend
                        for poor patient</p>
                        <div className="flex items-start justify-end">
                            <img src={round} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* third div */}
            <div className='col-span-1 mt-auto  border border-[#02004333] p-4 rounded-lg shadow-lg h-[312px] w-[216]'>
                <div className="">
                    <h3 className="text-4xl inter-700">50+</h3>
                    <p className="mt-2">Free lession video 
                    for patient</p>
                    <div className="flex justify-center mt-2">
                        <img src={camera} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;