import Contact from '../components/Contact';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import React from 'react';
import styles from '../styles/pages/index.module.scss';

const index = () => {
    return (
        <div className={styles.container}>
            <Navbar />

            <Intro />
            <br />
            <Contact />
        </div>
    );
};

export default index;
