import React, { useContext } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import styles from '../styles/components/Toggle.module.scss';
import { useTheme } from 'next-themes';

const Toggle = () => {
    const { theme, setTheme } = useTheme();

    const toggle = () => {
        if (theme === 'light') return setTheme('dark');
        setTheme('light');
    };
    return (
        <div className={styles.toggle} onClick={toggle}>
            <DarkModeIcon />
            <WbSunnyIcon />
            <div className={styles.button} style={theme === 'light' ? { left: '2px' } : { right: '2px' }}></div>
        </div>
    );
};

export default Toggle;
