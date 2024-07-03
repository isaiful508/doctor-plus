import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Stat from "../Stat/Stat";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            
            <Banner></Banner>
            <Stat></Stat>
            
        </div>
    );
};

export default Home;