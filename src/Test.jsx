import { motion } from "framer-motion"

const Test = () => {
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 } }

    return (
        <div className="course">
            <motion.div className="box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}>
            </motion.div>

            {/* <motion.ul animate="hidden" variants={list} >
                <motion.li variants={item} transition={{duration:5}}>item1</motion.li>
                <motion.li variants={item} transition={{duration:5}}>item2</motion.li>
                <motion.li variants={item} transition={{duration:5}}>item3</motion.li>
            </motion.ul> */}
        </div>
    )
}

export default Test