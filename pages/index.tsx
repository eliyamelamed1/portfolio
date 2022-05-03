import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import React from 'react';
import Services from '../components/Services';
import styles from '../styles/pages/index.module.scss';

const index = () => {
    const HrSeparator = () => {
        return <hr className={styles.hr} />;
    };

    return (
        <div className={styles.container}>
            <Navbar />
            <Intro />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default index;
