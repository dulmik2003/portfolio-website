import { motion } from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/SideBar'

import github from "../../../public/github.png"
import linkedin from "../../../public/linkedIn.png"
import hackerrank from "../../../public/hackerrank.png"
import stackoverflow from "../../../public/stack-oweflow.png"

const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar />
            <div className='wrapper'>
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}>
                    Full Stack dev
                </motion.span>

                <div className='social'>
                    <a href="https://github.com/dulmik2003" target="_blank">
                        <img src={github} alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/dulmika-semal-19955a2b3/" target="_blank">
                        <img src={linkedin} alt="" />
                    </a>

                    <a href="https://www.hackerrank.com/profile/semaldulmika" target="_blank">
                        <img src={hackerrank} alt="" />
                    </a>

                    <a href="https://stackoverflow.com/users/22796206/dulmika-semal?tab=profile" target="_blank">
                        <img src={stackoverflow} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;