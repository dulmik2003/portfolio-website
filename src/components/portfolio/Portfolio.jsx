import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './portfolio.scss'
import { useRef } from 'react';

const items = [
    {
        id: 1,
        title: "Student Manage System",
        img: "projects/student-manage-system.png",
        desc: "The Student Management System is a comprehensive web application designed to streamline administrative tasks related to student data management. Developed using Angular for the frontend, Spring Boot for the backend, and MySQL for database management, this project offers a robust platform for educational institutions to efficiently manage student information."
    },
    {
        id: 2,
        title: "Library Manage System",
        img: "projects/library-manage-system.png",
        desc: "Developed a comprehensive Library Management System using Angular for the frontend, Spring Boot for the backend, and MySQL for the database. This system allows users to efficiently manage library resources by enabling functionalities such as adding new books, updating book details, removing books, and performing similar operations for authors."
    },
    {
        id: 3,
        title: "Book Social Network",
        img: "projects/book-social-network.png",
        desc: "This web application enables users to manage their book collections and engage with a community of book enthusiasts. It offers features such as user registration, secure email validation, book management (including creation, updating, sharing and archiving), book borrowing with checks for availability, book return functionality, and approval of book returns."
    },
    // {
    //     id: 4,
    //     title: "Music player",
    //     img: "8K/deathstroke.jpg",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maxime odit, similique laborum amet quibusdam neque error ducimus reprehenderit ad saepe inventore corporis, dolore fugiat et. Tenetur quo maxime minus!"
    // }
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section id='projects'>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>

                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <motion.button whileTap={{ scale: 0.95 }}>See Demo</motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{ scaleX }}></motion.div>
            </div>

            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
};

export default Portfolio;