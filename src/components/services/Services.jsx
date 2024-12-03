import { useRef } from 'react';
import './services.scss'
import { motion, useInView } from "framer-motion";

import peopleImg from "../../../public/people.webp"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
};

const imageVariants = {
    initial: {
        y: 0,
        opacity: 0.6
    },
    animate: {
        y: 10,
        opacity: 1,
        transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror"
        }
    }
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-150px" });

    return (
        <motion.div className="services" ref={ref} variants={variants} initial="initial" animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping you succeed by providing
                    <br /> solutions across the Technology.
                </p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <motion.img variants={imageVariants} initial="initial" animate="animate" src={peopleImg} alt="" />
                    <h1> <b>Efficient</b> Software </h1>
                </div>

                <div className="title">
                    <h1> <b>For Your</b> Business. </h1>
                </div>
            </motion.div>

            <motion.div className="cardsContainer" variants={variants}>
                <motion.div className="card">
                    <h2>Planing</h2>
                    <p>
                        What do we want? In this stage, we determines the cost and resources required for implementing the analyzed requirements. It also details the risks involved and provides sub-plans for softening those risks.
                    </p>
                </motion.div>

                <motion.div className="card">
                    <h2>Developing</h2>
                    <p>
                        Let's create what we want. At this stage, the actual development starts. It's important that every developer sticks to the agreed plan. Also, make sure we have proper guidelines in place about the code style and practices.
                    </p>
                </motion.div>

                <motion.div className="card">
                    <h2>Testing</h2>
                    <p>
                        Did we get what we want? In this stage, we test for defects and deficiencies. We fix those issues until the product meets the original specifications. In short, we want to verify if the code meets the defined requirements.
                    </p>
                </motion.div>

                <motion.div className="card">
                    <h2>Deployment</h2>
                    <p>
                        Let's start using what we got. At this stage, the goal is to deploy the software to the production environment so users can start using the product. Once an update has been fully tested, it can be deployed
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
};

export default Services;