import React from 'react';
import Toggle from './Toggle';
import UIButton from './UI/UIButton';
import styles from '../styles/components/Navbar.module.scss';

const links = ['About me', 'Services', 'Experience', 'Skills', 'Portfolio'];

const LinkContainer = () => {
    return (
        <div className={styles.LinkContainer}>
            {links.map((link) => {
                return <h3 key={link}>{link}</h3>;
            })}
        </div>
    );
};

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Toggle />
            <LinkContainer />
            <UIButton>Contact</UIButton>
        </nav>
    );
};

export default Navbar;
