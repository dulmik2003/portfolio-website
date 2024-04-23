    import { motion } from 'framer-motion';
    import './hero.scss'

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            }
        }
    };

    const slidingTextVariants = {
        initial: { x: "25%" },
        animate: {
            x: "-110%",
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    };

    const imageVariants = {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1
            }
        }
    };

    const Hero = () => {
        return (
            <div className="hero">
                <div className="wrapper">
                    <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                        <motion.h2 variants={textVariants}>DULMIKA SEMAL</motion.h2>
                        <motion.h1 variants={textVariants}>Web developer and designer</motion.h1>

                        <motion.div variants={textVariants} className="buttons">
                            <a href="#projects">
                                <motion.button id='btn-left' whileTap={{ scale: 0.95 }}>
                                    See the Latest Works
                                </motion.button>
                            </a>

                            <a href="">
                                <motion.button id='btn-right' whileTap={{ scale: 0.95 }}>
                                    Contact Me
                                </motion.button>
                            </a>
                        </motion.div>

                        <motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="" />
                    </motion.div>

                    <motion.div className="slidingTextContainer" variants={slidingTextVariants} initial="initial" animate="animate">
                        Developer &nbsp; Designer &nbsp; Freelancer
                    </motion.div>

                    <div className="imageContainer">
                        {/* <motion.img variants={imageVariants} initial="initial" animate="animate" src="profile.png" alt="" /> */}
                        <img src="profile.png" alt="" />
                    </div>
                </div>
            </div >
        )
    }

    export default Hero