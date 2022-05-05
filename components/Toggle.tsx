import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { motion } from 'framer-motion';
import styles from '../styles/components/Toggle.module.scss';
import { useTheme } from 'next-themes';

const Toggle = () => {
    const { theme, setTheme } = useTheme();

    const toggle = () => {
        if (theme === 'light') return setTheme('dark');
        setTheme('light');
    };
    return (
        <motion.div
            className={styles.toggle}
            onClick={toggle}
            whileHover={{
                scale: 1.2,
            }}
        >
            <DarkModeIcon />
            <WbSunnyIcon />
            <div className={styles.dot}></div>
        </motion.div>
    );
};

export default Toggle;
