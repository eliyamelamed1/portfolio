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
            sx={{
                width: 250,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
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
                    width: '100%',
                    alignItems: 'center',
                }}
            >
                {links.map((text, index) => {
                    const Icon = iconList[index];
                    return (
                        <ListItem button key={text} sx={{ gap: '3rem' }}>
                            <Icon className='text' />
                            <UINavBtn>{text}</UINavBtn>
                        </ListItem>
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
            <Drawer
                sx={{ width: 250, background: 'black' }}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
        </div>
    );
}
