import { DiDjango, DiHtml5, DiPostgresql, DiSass } from 'react-icons/di';
import {
    SiCss3,
    SiJavascript,
    SiJest,
    SiMaterialui,
    SiNextdotjs,
    SiPytest,
    SiReact,
    SiRedux,
    SiTypescript,
} from 'react-icons/si';

import { BsGithub } from 'react-icons/bs';
import { FaPython } from 'react-icons/fa';
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/pages/index.module.scss';

const iconList = [
    <SiTypescript className={styles.skillIcons} key={0} />,
    <SiReact className={styles.skillIcons} key={1} />,
    <DiDjango className={styles.skillIcons} key={2} />,
    <FaPython className={styles.skillIcons} key={3} />,
    <SiJavascript className={styles.skillIcons} key={4} />,
    <SiCss3 className={styles.skillIcons} key={5} />,
    <DiHtml5 className={styles.skillIcons} key={6} />,
    <SiRedux className={styles.skillIcons} key={7} />,
    <DiPostgresql className={styles.skillIcons} key={8} />,
    <DiSass className={styles.skillIcons} key={9} />,
    <SiNextdotjs className={styles.skillIcons} key={10} />,
    <SiJest className={styles.skillIcons} key={11} />,
    <SiMaterialui className={styles.skillIcons} key={12} />,
    <SiPytest className={styles.skillIcons} key={13} />,
    <BsGithub className={styles.skillIcons} key={14} />,
];

const parent = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const child = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: [2, 1],
    },
};

const Icons = () => {
    return (
        <motion.div variants={parent} className={styles.iconsContainer} initial='hidden' animate='visible'>
            {iconList.map((icon, index) => {
                return (
                    <motion.section className={styles.skillIcons} key={index} variants={child}>
                        {icon}
                    </motion.section>
                );
            })}
        </motion.div>
    );
};

export default Icons;
