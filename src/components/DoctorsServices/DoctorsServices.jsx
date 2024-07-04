import { FiArrowUpRight } from "react-icons/fi";
import img1 from '../../assets/Rectangle 27-2.png'
import img2 from '../../assets/Rectangle 27-1.png'
import img3 from '../../assets/Rectangle 27.png'


const DoctorsServices = () => {
    return (
        <div className="mt-32 w-[580px] lg:w-full bg-[#fffff5] grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-lg p-4">
            {/* health part */}
            <div>
                <button className="px-4 py-2 inter-500 bg-white border border-[#4d4c7b] rounded-full shadow-md">
                Service
                </button>
                <h2 className="text-4xl inter-700 mt-6 font-semibold">Empowering Health, Enriching Lives</h2>
                <p className="text-[#4d4c7b] mt-4 inter-500">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                </p>
                <button className="px-4 py-2 mt-6 inter-500 bg-[#FFC637] rounded-xl flex justify-between items-center gap-2 font-semibold inter-500">
                    Learn more <FiArrowUpRight className="text-xl" />
                </button>
            </div>
            {/* side 1st img */}
            <div className="relative">
                <img className="rounded-xl w-full h-full" src={img1} alt="" />

                <div className="bg-[#343268] opacity-90 p-4 w-[340px] h-[190px]  rounded-xl absolute bottom-2 left-8">
                <h3 className="text-white text-xl inter-500">Advanced Technology</h3>
                <p className="text-[#FFFFFFCC] inter-400">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                <div className="flex justify-end items-start absolute right-4 bottom-0">
                <FiArrowUpRight className="text-4xl text-white p-2 rounded-full bg-[#FFC637] items-center h-full" />
                </div>
                </div>
            </div>
            {/* side 2nd img */}
            <div className="relative">
                <img className="rounded-xl w-full h-full" src={img2} alt="" />

                <div className="bg-[#343268] opacity-90 p-4 w-[340px] h-[190px]  rounded-xl absolute bottom-2 left-8">
                <h3 className="text-white text-xl inter-500">Online Doctor Meet</h3>
                <p className="text-[#FFFFFFCC] inter-400">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                <div className="flex justify-end items-start absolute right-4 bottom-0">
                <FiArrowUpRight className="text-4xl text-white p-2 rounded-full bg-[#FFC637] items-center h-full" />
                </div>
                </div>
            </div>
            {/* side 3rd img */}
            <div className="relative">
                <img className="rounded-xl w-full h-full" src={img3} alt="" />

                <div className="bg-[#343268] opacity-90 p-4 w-[340px] h-[190px]  rounded-xl absolute bottom-2 left-8">
                <h3 className="text-white text-xl inter-500">Consultancy your health</h3>
                <p className="text-[#FFFFFFCC] inter-400">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                <div className="flex justify-end items-start absolute right-4 bottom-0">
                <FiArrowUpRight className="text-4xl text-white p-2 rounded-full bg-[#FFC637] items-center h-full" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsServices;