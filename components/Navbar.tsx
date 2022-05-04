import * as React from 'react';

import SideNav from './SideNav';
import Toggle from './Toggle';
import UIButton from './UI/UIButton';
import UINavBtn from './UI/UINavBtn';
import { motion } from 'framer-motion';
import { navLinks } from '../utils/enum';
import styles from '../styles/components/Navbar.module.scss';

const Navbar = () => {
    const DesktopBar = () => {
        return (
            <div className={styles.linksContainer}>
                {navLinks.map((page) => (
                    <UINavBtn key={page}>{page}</UINavBtn>
                ))}
            </div>
        );
    };

    return (
        <motion.div
            className={styles.nav}
            initial={{
                y: '-20vw',
            }}
            animate={{ y: 0, type: 'spring' }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
            <DesktopBar />
            <div className={styles.sideNavContainer}>
                <SideNav />
            </div>
            <section>
                <UIButton>Contact</UIButton>
                <Toggle />
            </section>
        </motion.div>
    );
};
export default Navbar;
