import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-scroll';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import UINavBtn from './UI/UINavBtn';
import styles from '../styles/components/Navbar.module.scss';
import stylesNav from '../styles/components/UI/UINavBtn.module.scss';

const navLinks = ['Home', 'Skills', 'Projects', 'Contact'];

type Anchor = 'left';

export default function SideNav() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const anchor = 'left';

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const LinkLists = (anchor: Anchor) => (
        <Box
            style={{
                width: 200,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid white',
            }}
            className='background'
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    alignItems: 'center',
                }}
            >
                {navLinks.map((link, index) => {
                    return (
                        <UINavBtn key={index}>
                            <Link to={link} className={stylesNav.button} smooth={true} spy={true} duration={500}>
                                {link}
                            </Link>
                        </UINavBtn>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <div className={styles.sideNav} key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon className={styles.sideNavColor} />
            </Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                <LinkLists anchor={anchor} />
            </Drawer>
        </div>
    );
}
