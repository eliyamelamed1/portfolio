import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import InfoIcon from '@mui/icons-material/Info';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MilitaryTechSharpIcon from '@mui/icons-material/MilitaryTechSharp';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import TaskIcon from '@mui/icons-material/Task';
import UINavBtn from './UI/UINavBtn';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { links } from '../utils/enum';
import styles from '../styles/components/Navbar.module.scss';

const iconList = [InfoIcon, MiscellaneousServicesIcon, WorkHistoryIcon, MilitaryTechSharpIcon, TaskIcon];

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

    const list = (anchor: Anchor) => (
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
                {links.map((text, index) => {
                    const Icon = iconList[index];
                    return (
                        <button
                            key={text}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                gap: '2rem',
                                justifyContent: 'flex-start',
                            }}
                            className='icon'
                        >
                            <Icon />
                            <h3>{text}</h3>
                        </button>
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
                {list(anchor)}
            </Drawer>
        </div>
    );
}
