import { motion } from "framer-motion";

const middlePathVariants = {
    open: { opacity: 0 },
    close: { opacity: 1 }
};

const upperPathVariants = {
    open: { d: "M 3 16.5 L 17 2.5" },
    close: { d: "M 2 2.5 L 20 2.5" }
};

const lowerPathVariants = {
    open: { d: "M 3 2.5 L 17 16.346" },
    close: { d: "M 2 16.346 L 20 16.346" }
};

const ToggleButton = ({ setState }) => {
    return (
        <button onClick={() => {
            setState((prev) => {
                console.log(prev);
                return !prev;
            });
        }}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" variants={upperPathVariants} />
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" d="M 2 9.423 L 20 9.423" variants={middlePathVariants} />
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" variants={lowerPathVariants} />
            </svg>
        </button>
    );
}

export default ToggleButton;