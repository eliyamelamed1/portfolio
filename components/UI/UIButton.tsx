import React from 'react';
import styles from '../../styles/components/UI/UIButton.module.scss';

const UIButton = ({ children }) => {
    return <button className={styles.button}>{children}</button>;
};

export default UIButton;
