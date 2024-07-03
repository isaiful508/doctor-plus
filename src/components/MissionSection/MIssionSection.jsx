import { FiArrowUpRight } from "react-icons/fi";
import doctors from '../../assets/Rectangle 24.png'

const MIssionSection = () => {
    return (
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
                <button className="px-4 py-2 inter-500 bg-[#fffff5] border border-[#4d4c7b] rounded-full shadow-md">
                    Who we are
                </button>
                <h2 className="text-4xl inter-700 mt-6 font-semibold">We Help To Get Soultions</h2>
                <p className="text-[#4d4c7b] mt-4 inter-500">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className="px-4 py-2 mt-6 inter-500 bg-[#FFC637] rounded-xl flex justify-between items-center gap-2 font-semibold inter-500">
                    Learn more <FiArrowUpRight className="text-xl" />
                </button>
            </div>
            <div className="relative">
                <img className="w-full h-full" src={doctors} alt="" />

                <div className="bg-[#343268] w-[400px] h-[210px] px-4 py-6 rounded-xl absolute -bottom-8 -left-20">
                <h3 className="text-white text-2xl inter-500">Our mission is simple</h3>
                <p className="text-[#FFFFFFCC] mt-4 inter-400">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default MIssionSection;