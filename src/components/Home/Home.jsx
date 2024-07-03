import Banner from "../Banner/Banner";
import MIssionSection from "../MissionSection/MIssionSection";
import Navbar from "../Navbar/Navbar";
import Stat from "../Stat/Stat";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Stat></Stat>
            <MIssionSection></MIssionSection>
            
        </div>
    );
};

export default Home;