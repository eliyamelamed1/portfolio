import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/components/UI/UIButton.module.scss';

interface PropTypes {
    children: any;
    onClick?: any;
}

const UIButton = ({ children = '', onClick = null }: PropTypes) => {
    return (
        <motion.button
            className={styles.button}
            whileHover={{
                scale: 1.2,
            }}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default UIButton;
