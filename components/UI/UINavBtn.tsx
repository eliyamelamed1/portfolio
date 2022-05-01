import React from 'react';
import styles from '../../styles/components/UI/UINavBtn.module.scss';

const UINavBtn = ({ children }) => {
    return <div className={styles.button}>{children}</div>;
};

export default UINavBtn;
