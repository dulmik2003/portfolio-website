import { motion, useScroll, useTransform } from 'framer-motion';
import './parallax.scss'
import { useRef } from 'react';

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress, scrollXProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <div className="parallax" ref={ref} style={{
            background:
                type === "Services"
                    ? "linear-gradient(180deg, #111132, #0c0c1d)"
                    : "linear-gradient(180deg, #111132, #505064)"
        }}>
            <motion.h1 style={{ y: yText }}>
                {type === "Services" ? "What I Do?" : "What I Did?"}
            </motion.h1>

            <motion.div className="mountains"></motion.div>

            <motion.div style={{
                y: yBg,
                backgroundImage:
                    type === "Services"
                        ? "url('planets.png')"
                        : "url('sun.png')"
            }} className="planets">
            </motion.div>

            <motion.div className="stars" style={{ x: xBg }}></motion.div>
        </div >
    )
};

export default Parallax;