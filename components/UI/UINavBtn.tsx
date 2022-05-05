import { Link } from 'react-scroll';
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/components/UI/UINavBtn.module.scss';

const UINavBtn = ({ children }) => {
    return (
        <motion.div
            className={styles.button}
            whileHover={{
                scale: 1.2,
            }}
        >
            {children}
        </motion.div>
    );
};

export default UINavBtn;
