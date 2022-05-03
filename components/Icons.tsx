import { DiDjango, DiHtml5, DiPostgresql, DiSass } from 'react-icons/Di';
import React, { useEffect, useState } from 'react';
import { SiCss3, SiJavascript, SiJest, SiMaterialui, SiNextdotjs, SiPytest, SiRedux } from 'react-icons/Si';
import { SiReact, SiTypescript } from 'react-icons/si';

import { BsGithub } from 'react-icons/Bs';
import { FaPython } from 'react-icons/fa';
import { icons } from 'react-icons/lib';
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

const Icons = () => {
    const [position, setPosition] = useState(0);
    const onClick = () => {
        setPosition(position + 1);
    };
    return (
        <motion.div className={styles.iconsContainer} drag='x' dragConstraints={{ right: position }}>
            <button onClick={onClick}>Click</button>
            {iconList.map((icon, index) => {
                return (
                    <motion.section className={styles.iconsContainer} key={index}>
                        {icon}
                    </motion.section>
                );
            })}
        </motion.div>
    );
};

export default Icons;
