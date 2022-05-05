import * as React from 'react';

import { Link } from 'react-scroll';
import SideNav from './SideNav';
import Toggle from './Toggle';
import UIButton from './UI/UIButton';
import UINavBtn from './UI/UINavBtn';
import { motion } from 'framer-motion';
import styles from '../styles/components/Navbar.module.scss';
import stylesNav from '../styles/components/UI/UINavBtn.module.scss';

const navLinks = ['Home', 'Skills', 'Projects'];

const Navbar = () => {
    const DesktopBar = () => {
        return (
            <div className={styles.linksContainer}>
                {navLinks.map((link, index) => {
                    return (
                        <UINavBtn key={index}>
                            <Link
                                to={link}
                                className={stylesNav.button}
                                style={{
                                    textDecoration: 'unset',
                                }}
                                smooth={true}
                                spy={true}
                                duration={500}
                            >
                                {link}
                            </Link>
                        </UINavBtn>
                    );
                })}
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
                <Link
                    to='Contact'
                    className={stylesNav.button}
                    style={{
                        textDecoration: 'unset',
                    }}
                    smooth={true}
                    spy={true}
                    duration={500}
                >
                    <UIButton>Contact</UIButton>
                </Link>
                <Toggle />
            </section>
        </motion.div>
    );
};
export default Navbar;
