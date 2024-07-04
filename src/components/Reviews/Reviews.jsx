import img1 from '../../assets/woman1.png'
import img2 from '../../assets/man2.png'
import img3 from '../../assets/man3.png'
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
    return (
        <div className="mt-20 w-[580px] lg:w-full">
            {/* button and title */}
            <div>
                <button className="px-4 py-2 inter-500 bg-white border border-[#4d4c7b] rounded-full shadow-md">
                    Testimonial
                </button>
                <h2 className="text-4xl inter-700 mt-6 font-semibold">What they say about us</h2>

                {/* clients reviews */}
             <div className='grid  lg:grid-cols-3 gap-6 grid-cols-1'>
             <div className="bg-[#fffff5] w-[580px] lg:w-full shadow-md rounded-lg mt-6 py-2 px-6">
                    <h2 className="text-2xl inter-700  font-semibold">Expertise and Compassion Combined</h2>
                    <p className="mt-2 inter-400">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>

                    <div className='flex gap-2 mt-4'>
                        <img src={img1} alt="" />
                        <h2 className='inter-400'><span className='font-semibold'>Sarah D,</span> IT Professional
                            <div className='flex'>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            </div>
                        </h2>


                    </div>


                </div>
                <div className="bg-[#fffff5] w-[580px] lg:w-full shadow-md rounded-lg mt-6 py-2 px-6">
                    <h2 className="text-2xl inter-700  font-semibold">Life-Saving Care, Life-Changing Experience</h2>
                    <p className="mt-2 inter-400">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>

                    <div className='flex gap-2 mt-4'>
                    <img className='' src={img2} alt="" />
                        <h2 className='inter-400'><span className='font-semibold'>Michael R,</span> Business Man
                            <div className='flex'>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            </div>
                        </h2>


                    </div>


                </div>
                <div className="bg-[#fffff5] w-[580px] lg:w-full shadow-md rounded-lg mt-6 py-2 px-6">
                    <h2 className="text-2xl inter-700  font-semibold">A Partner in Health and
                    Wellness</h2>
                    <p className="mt-2 inter-400">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and.</p>

                    <div className='flex gap-2 mt-4'>
                        <img src={img3} alt="" />
                        <h2 className='inter-400'><span className='font-semibold'>David S,</span> Lawyer
                            <div className='flex'>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            </div>
                        </h2>


                    </div>


                </div>
             </div>



            </div>
        </div>
    );
};

export default Reviews;