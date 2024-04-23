import { motion } from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/SideBar'

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
                        <img src="./github.png" alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/dulmika-semal-19955a2b3/" target="_blank">
                        <img src="./linkedIn.png" alt="" />
                    </a>

                    <a href="https://www.hackerrank.com/profile/semaldulmika" target="_blank">
                        <img src="./hackerrank.png" alt="" />
                    </a>

                    <a href="https://stackoverflow.com/users/22796206/dulmika-semal?tab=profile" target="_blank">
                        <img src="./stack-oweflow.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;