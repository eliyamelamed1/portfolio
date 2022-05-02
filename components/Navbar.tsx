import * as React from 'react';

import SideNav from './SideNav';
import Toggle from './Toggle';
import UIButton from './UI/UIButton';
import UINavBtn from './UI/UINavBtn';
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
        <div className={styles.nav}>
            <DesktopBar />
            <div className={styles.sideNavContainer}>
                <SideNav />
            </div>
            <section>
                <UIButton>Get In Touch</UIButton>
                <Toggle />
            </section>
        </div>
    );
};
export default Navbar;
