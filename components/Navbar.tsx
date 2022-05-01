import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toggle from './Toggle';
import Toolbar from '@mui/material/Toolbar';
import UIButton from './UI/UIButton';
import UINavBtn from './UI/UINavBtn';
import styles from '../styles/components/Navbar.module.scss';

const links = ['About me', 'Services', 'Experience', 'Skills', 'Portfolio'];

const Navbar = () => {
    const DesktopBar = () => {
        return (
            <div className={styles.linksContainer}>
                {links.map((page) => (
                    <UINavBtn key={page}>{page}</UINavBtn>
                ))}
            </div>
        );
    };

    return (
        <div className={styles.nav}>
            <DesktopBar />
            <section>
                <UIButton>Contact</UIButton>
                <Toggle />
            </section>
        </div>
    );
};
export default Navbar;
