
import { FiArrowUpRight } from 'react-icons/fi';
import logo from '../../assets/logo dark.png'
const Navbar = () => {

    return (
        <div className="navbar  mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm text-[#020043] dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>About us</li>
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal   px-1 space-x-4 inter-400">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className="navbar-end flex justify-end">
                <a className="btn inter-500 border border-[#020043] bg-white">Appointment <FiArrowUpRight /></a>
            </div>
        </div>
    );
};

export default Navbar;