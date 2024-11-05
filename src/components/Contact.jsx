import {CONTACT} from "../constants/index.js"; // Ensure you have this import
import {motion} from "framer-motion"
import {FaLinkedin, FaGithub} from 'react-icons/fa';
//import gfgLogo from "../assets/gfgfLogo.webp"; // Your custom GeeksforGeeks logo
//import { FaCode } from 'react-icons/fa'; // You can use FaCode for GeeksforGeeks
import { SiLeetcode } from 'react-icons/si'; // LeetCode icon from simple-icons
const Contact = () => {
    return (
        <div id="Contact" className="border-t border-stone-900 pb-30">
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                className="my-10 text-center text-4xl">Get in Touch
            </motion.h2>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
              <a href="https://www.linkedin.com/in/pratibh29/" target="_blank"
                 rel="noopener noreferrer"
                 aria-label="LinkedIn" className="text-white hover:text-gray-500">
                  <FaLinkedin/>
              < /a>
              <a href="https://github.com/Pratibh29" target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Githib" className="text-white hover:text-gray-500">
                  <FaGithub/>
              < /a>
              {/* LeetCode Link */}
                <a href="https://leetcode.com/u/Pratibh29/" target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode" className="text-white hover:text-gray-500">
                    <SiLeetcode />
                </a>

                {/* GeeksforGeeks Link */}
                {/* Custom GeeksforGeeks Image */}
                {/*<a href="https://auth.geeksforgeeks.org/user/your-profile" target="_blank"*/}
                {/*    rel="noopener noreferrer" aria-label="GeeksforGeeks">*/}
                {/*    <img src={gfgLogo} alt="GeeksforGeeks Logo" className="w-8 h-8 hover:opacity-80" />*/}
                {/*</a>*/}
                {/*<a href="https://auth.geeksforgeeks.org/user/your-profile" target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*    aria-label="GeeksforGeeks">*/}
                {/*    <FaCode />*/}
                {/*</a>*/}
          </div>
            <div className="text-center tracking-tighter">
                {/*<motion.p*/}
                {/*    whileInView={{opacity: 1, x: 0}}*/}
                {/*    initial={{opacity: 0, x: -100}}*/}
                {/*    transition={{duration: 1}}*/}
                {/*    className="my-4">*/}
                {/*    {CONTACT.address}*/}
                {/*</motion.p>*/}
                <motion.p
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className="my-4">
                    {CONTACT.phoneNo}
                </motion.p>
                <a href="#" className="border-b text-white hover:text-gray-500">
                    {CONTACT.email}
                </a>
            </div>

        </div>

    )
}
export default Contact