import Banner from "../Banner/Banner";
import Discounts from "../Discounts/Discounts";
import DoctorsServices from "../DoctorsServices/DoctorsServices";
import Footer from "../Footer/Footer";
import MIssionSection from "../MissionSection/MIssionSection";
import Navbar from "../Navbar/Navbar";
import Questions from "../Questions/Questions";
import Reviews from "../Reviews/Reviews";
import Stat from "../Stat/Stat";


const Home = () => {
    return (
       <div>
         <div className="container mx-auto bg-[#FBFBFB]">
            <Navbar></Navbar>
            <Banner></Banner>
            <Stat></Stat>
            <MIssionSection></MIssionSection>
            <DoctorsServices></DoctorsServices>
            <Reviews></Reviews>
            <Questions></Questions>
            <Discounts></Discounts>
        </div>
            <Footer></Footer>
       </div>
    );
};

export default Home;