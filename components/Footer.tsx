import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import { outerLinks } from '../utils/enum';
import styles from '../styles/components/Footer.module.scss';
import wave from '../assets/wave.png';

const Footer = () => {
    return (
        <div className={styles.container}>
            <section>
                <h2>EliyaMelamed1@gmail.com</h2>
                <h2>054-4967169</h2>
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
            </section>
            <img src={wave.src} />
        </div>
    );
};

export default Footer;
