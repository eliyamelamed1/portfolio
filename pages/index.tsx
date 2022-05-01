import React, { useState } from 'react';

import AboutMe from '../components/AboutMe';
import Navbar from '../components/Navbar';
import styles from '../styles/pages/index.module.scss';

const index = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <AboutMe />
        </div>
    );
};

export default index;
