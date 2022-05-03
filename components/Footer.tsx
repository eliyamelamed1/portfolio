import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import { outerLinks } from '../utils/enum';
import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.container}>
            <h3>EliyaMelamed1@gmail.com</h3>
            <h3>054-4967169</h3>
            <div className={styles.contactContainer}>
                <GitHubIcon
                    className={styles.contactIcons}
                    onClick={typeof window !== 'undefined' ? () => window.open(outerLinks.github) : () => null}
                />
                <LinkedInIcon
                    className={styles.contactIcons}
                    onClick={typeof window !== 'undefined' ? () => window.open(outerLinks.linkedin) : () => null}
                />
            </div>
        </div>
    );
};

export default Footer;
