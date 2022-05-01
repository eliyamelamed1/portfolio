import React, { useContext } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import styles from '../styles/components/Toggle.module.scss';

const Toggle = ({ toggle, theme }) => {
    return (
        <div className={styles.toggle} onClick={toggle}>
            <DarkModeIcon />
            <WbSunnyIcon />
            <div className={styles.button} style={theme === 'light' ? { left: '2px' } : { right: '2px' }}></div>
        </div>
    );
};

export default Toggle;
