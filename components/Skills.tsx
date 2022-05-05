import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/components/Skills.module.scss';

const Skills = () => {
    return (
        <div className={styles.container} id='Skills'>
            <motion.section
                className={styles.card}
                whileHover={{ scale: 1.15, rotate: -360, borderRadius: '30%' }}
                transition={{
                    duration: 1,
                }}
            >
                <h1>Back-end Developer</h1>
                <p>I like to code things from scratch and enjoy bringing ideas to life</p>
                <h2>Technologies</h2>
                <span>Python, Django, Django REST framework, PostgreSQL, Pytest</span>
            </motion.section>
            <motion.section
                className={styles.card}
                whileHover={{ scale: 1.15, rotate: -360, borderRadius: '30%' }}
                transition={{
                    duration: 1,
                }}
            >
                <h1>General</h1>
                <p>I like to code things from scratch and enjoy bringing ideas to life</p>
                <h2>Technologies</h2>
                <span>GIT, Figma, Heroku, Vercel, Docker, ElasticSearch, Pygame, SendGrid</span>
            </motion.section>
            <motion.section
                className={styles.card}
                whileHover={{ scale: 1.15, rotate: -360, borderRadius: '30%' }}
                transition={{
                    duration: 1,
                }}
            >
                <h1>Front-end Developer</h1>
                <p>I like to code things from scratch and enjoy bringing ideas to life</p>
                <h2>Technologies</h2>
                <span>TypeScript, JavaScript, React.js, Next.js, Scss, Css, Material UI, Jest, Framer Motion</span>
            </motion.section>
        </div>
    );
};

export default Skills;
