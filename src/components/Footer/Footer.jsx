import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo light.png'

const Footer = () => {
    return (
      
        <footer className="footer inter-600 w-[580px] lg:w-full bg-[#020043] text-[#FFFFF5] p-16">
        <aside className='space-y-4'>
          <img src={logo} alt="" />
          <p>
          123 Main Street Anytown, USA <br />
          Postal Code: 12345
          </p>
          <p>Support: support@oyolloo.com <br />
          (Available : 10:00am to 07:00pm)</p>

        </aside>
        <nav>
          
        <h6 className="footer-title">Home</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms and condition</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Patient Portal</a>
         
        </nav>
        <nav>
         <p>Follow us on</p>
         <div className='flex gap-5 items-center mt-2'>
         <FaFacebook className='text-2xl' />
         <FaInstagram className='text-2xl' />
         <FaLinkedin className='text-2xl' />
         <FaYoutube className='text-2xl' />
         </div>
         <p className='mt-2'>@docplus 2024</p>
        </nav>
      </footer>
    );
};

export default Footer;