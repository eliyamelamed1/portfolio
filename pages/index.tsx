import React, { useState } from 'react';

import AboutMe from '../components/AboutMe';
import Navbar from '../components/Navbar';
import styles from '../styles/pages/index.module.scss';
import { useTheme } from 'next-themes';

const index = () => {
    const { theme, setTheme } = useTheme();

    const toggle = () => {
        if (theme === 'light') return setTheme('dark');
        setTheme('light');
    };

    return (
        <div className={styles.container}>
            <Navbar toggle={toggle} theme={theme} />
            <AboutMe />
        </div>
    );
};

export default index;
