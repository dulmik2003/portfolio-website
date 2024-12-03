import { motion, useScroll, useTransform } from 'framer-motion';
import './parallax.scss'
import { useRef } from 'react';

import mountainsImg from "../../../public/mountains.png";
import starsImg from "../../../public/stars.png";
import planetsImg from "../../../public/planets.png";
import sunImg from "../../../public/sun.png";

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

            <motion.div className="mountains" style={{ backgroundImage: `url(${mountainsImg})` }}>
            </motion.div>

            <motion.div style={{
                y: yBg,
                backgroundImage:
                    type === "Services"
                        ? `url(${planetsImg})`
                        : `url(${sunImg})`
            }} className="planets">
            </motion.div>

            <motion.div className="stars" style={{
                x: xBg,
                backgroundImage:
                    type === "Services"
                        ? `url(${starsImg})`
                        : 'none'
            }}>
            </motion.div>
        </div >
    )
};

export default Parallax;