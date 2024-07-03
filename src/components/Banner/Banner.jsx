

const Banner = () => {
    return (
        <div
            className="hero h-[550px] relative rounded-2xl mt-8"
            style={{   backgroundImage: "url(https://i.ibb.co/L6hKsdc/Rectangle-5.png)",
            }}>
            <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-[#00C19D] via-transparent to-[#020043] opacity-40 "></div>
            
        </div>
    );
};

export default Banner;