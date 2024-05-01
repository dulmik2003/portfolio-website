import { motion } from "framer-motion"
import { useState } from "react";

// const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
const items = ["Homepage", "Services", "Portfolio", "Contact"];

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1
        }
    },
    close: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    }
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    close: {
        y: 50,
        opacity: 0
    }
};

const Links = () => {
    return (
        <motion.div className="links" variants={variants}>
            {items.map(item => (
                <motion.a href={`#${item}`} key={item} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} variants={itemVariants}>
                    {item}
                </motion.a >
            ))}
        </motion.div>
    );
};

export default Links;