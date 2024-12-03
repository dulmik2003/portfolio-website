import { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './links/Links';
import './sidebar.scss'
import ToggleButton from './toggleButton/ToggleButton';

const Sidebar = () => {
    const [isOpen, setState] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                siffness: 20
            }
        },
        close: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.15,
                type: "spring",
                siffness: 400,
                    damping: 19
            }
        }
    }
    return (
        <motion.div className="sidebar" animate={isOpen ? "open" : "close"}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setState={setState} />
        </motion.div>
    );
}

export default Sidebar;