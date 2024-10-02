//import logo from "../assets/raviKumarLogo.webp"
//import { FaLinkedin ,FaGithub } from 'react-icons/fa';
//const Navbar = () => {
//    return (
//      <nav className="flex items-center justify-between py-6">
//        <div className='flex flex-shrink-0 items-center'>
//         <a href="/" aria-label="Home">
//           <img src={logo} className="mx-2" width={50} height={33} alt="Logo"/>
//         </a>
//        </div>
//        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//          <a href="https://www.linkedin.com/in/pratibh29/" target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn">
//            <FaLinkedin />
//           < /a>
//           <a href="https://github.com/Pratibh29" target="_blank"
//              rel="noopener noreferrer"
//              aria-label="Githib">
//               <FaGithub />
//            < /a>
//        </div>
//      </nav>
//    )
//  }
//export default Navbar

import logo from "../assets/raviKumarLogo.webp";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-8 text-2xl ">
        <a href="/" aria-label="Home" className="text-white hover:text-gray-500 no-underline">Home</a>
        <a href="#Technologies" aria-label="Technology" className="text-white hover:text-gray-500 no-underline">Technology</a>
        <a href="#Projects" aria-label="Projects" className="text-white hover:text-gray-500 no-underline">Projects</a>
        <a href="#Contact" aria-label="Contact" className="text-white hover:text-gray-500 no-underline">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;


