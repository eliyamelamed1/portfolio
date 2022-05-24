import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/components/Skills.module.scss';

const whileHover = {
    scale: 1.2,
};

const transition = {
    duration: 0.5,
};

const BackendSkills = () => (
    <motion.section className={styles.card} whileHover={whileHover} transition={transition}>
        <h1>Back-end Developer</h1>
        <p>
            Talent for resolving bugs, developing new features and refactoring existing programs, as well as
            implementing clean quality code
        </p>
        <h2>Technologies</h2>
        <span>Python, Django, Django REST framework, PostgreSQL, Pytest</span>
    </motion.section>
);
const GeneralSkills = () => (
    <motion.section className={styles.card} whileHover={whileHover} transition={transition}>
        <h1>General</h1>
        <p>
            Passionate about code things from scratch and enjoy bringing ideas to life. keep on learning and improving
            on a daily basis
        </p>
        <h2>Technologies</h2>
        <span>GIT, Figma, Heroku, Vercel, Docker, ElasticSearch, Pygame, SendGrid</span>
    </motion.section>
);

const FrontendSkills = () => (
    <motion.section className={styles.card} whileHover={whileHover} transition={transition}>
        <h1>Front-end Developer</h1>
        <p>
            Adept at analyzing requirements to ensure optimal performance, quality, and responsiveness of applications.
        </p>
        <h2>Technologies</h2>
        <span>TypeScript, JavaScript, React.js, Next.js, Material UI, Jest, Framer Motion, Scss, Css, react-query</span>
    </motion.section>
);

const Skills = () => {
    return (
        <div className={styles.container} id='Skills'>
            <BackendSkills />
            <GeneralSkills />
            <FrontendSkills />
        </div>
    );
};

export default Skills;
