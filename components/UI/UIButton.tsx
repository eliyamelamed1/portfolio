import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/components/UI/UIButton.module.scss';

interface PropTypes {
    children: any;
}

const UIButton = ({ children = '' }: PropTypes) => {
    return (
        <motion.button
            className={styles.button}
            whileHover={{
                scale: 1.2,
            }}
        >
            {children}
        </motion.button>
    );
};

export default UIButton;
