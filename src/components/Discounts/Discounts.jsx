import { FiArrowUpRight } from 'react-icons/fi';
import bannerImg from '../../assets/Rectangle 32.png'
import logo from '../../assets/logo light.png'

const Discounts = () => {
    return (
       <div className="mt-20 mb-20  md:w-[850px] lg:w-full">
         <div className="relative h-[300px] lg:h-[477px] w-[580px] lg:w-full bg-no-repeat bg-cover bg-center rounded-3xl overflow-hidden ">
        <img src={bannerImg} className="h-full w-full" alt="" />
        <div className="bg-gradient-to-r from-indigo-950 overflow-hidden z-30 absolute top-0 left-0 h-full w-full opacity-95 flex items-center p-14">
          <div className="flex flex-col gap-5">
            <h1 className="text-[40px] font-semibold inter-600 text-white">
              Get Your <br /> First Appointment <br /> at 50% Off!
            </h1>
            <div className="flex gap-5 inter-500">
              <button className="bg-[#FFC637] px-4 py-2 w-max rounded-md text-[16px] font-medium flex gap-2 items-center">
                <span>Appoinment</span>
                <span>
                <FiArrowUpRight className="text-xl" />
                </span>
              </button>
  
              <button className="text-white border border-black px-4 py-2 w-max rounded-md text-[16px] font-medium flex gap-2 items-center">
                <span>Learn more</span>
                <span>
                <FiArrowUpRight className="text-xl" />
                </span>
              </button>
            </div>
          </div>
  
          <img src={logo} className="absolute top-14 right-14" alt="" />
        </div>
      </div>
       </div>
    );
};

export default Discounts;