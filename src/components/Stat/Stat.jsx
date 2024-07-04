import pie from '../../assets/pie.png'
import badge from '../../assets/badge.png'
import groupPics from '../../assets/groupspic.png'
import round from '../../assets/round.png'
import camera from '../../assets/camear.png'
import { FaStar } from 'react-icons/fa';

const Stat = () => {
    return (
        <div className="mt-16 w-full grid lg:grid-cols-5 gap-6">
        <h2 className='lg:text-5xl text-3xl inter-700 text-center font-semibold lg:hidden'>Comprehensive Care for Every Patient</h2>
        {/* First section */}
        <div className='col-span-1 p-4 border border-[#02004333] rounded-lg shadow-lg flex flex-col items-center'>
            <h3 className="text-4xl inter-700">90%</h3>
            <p className="mt-1 inter-500 text-center">Patient satisfaction rate, reflecting our commitment.</p>
            <div className="mt-4">
                <img src={pie} alt="Pie Chart" />
            </div>
        </div>
        {/* Second section */}
        <div className='lg:col-span-3'>
            <h2 className='lg:text-5xl text-3xl inter-700 text-center font-semibold lg:flex hidden'>Comprehensive Care for Every Patient</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 lg:mt-0'>
                <div className="bg-[#fffff5] p-4 rounded-lg shadow-lg border border-[#02004333] flex flex-col items-center">
                    <h3 className="text-4xl inter-700">500+</h3>
                    <p className="mt-2 inter-500 text-center">Board-certified doctors</p>
                    <div className="mt-4">
                        <img src={badge} alt="Badge" />
                    </div>
                </div>
                <div className="bg-[#fbfbfb] p-4 rounded-lg shadow-lg border border-[#02004333] flex flex-col items-center">
                    <div className='flex items-center'>
                        <h3 className="text-4xl inter-700">4.8</h3>
                        <FaStar className='text-yellow-400 text-4xl ml-2' />
                    </div>
                    <p className="mt-2 inter-500 text-center">Over 20,000 Patient</p>
                    <div className="mt-4">
                        <img src={groupPics} alt="Group Pictures" />
                    </div>
                </div>
                <div className="bg-[#fffff5] p-4 rounded-lg shadow-lg border border-[#02004333] flex flex-col items-center">
                    <h3 className="text-4xl inter-700">$5000</h3>
                    <p className="mt-2 inter-500 text-center">Money spent for poor patients</p>
                    <div className="mt-4">
                        <img src={round} alt="Round" />
                    </div>
                </div>
            </div>
        </div>
        {/* Third section */}
        <div className='col-span-1 p-4 border border-[#02004333] rounded-lg shadow-lg flex flex-col items-center'>
            <h3 className="text-4xl inter-700">50+</h3>
            <p className="mt-2 inter-500 text-center">Free lesson video for patients</p>
            <div className="mt-4">
                <img src={camera} alt="Camera" />
            </div>
        </div>
    </div>
    );
};

export default Stat;