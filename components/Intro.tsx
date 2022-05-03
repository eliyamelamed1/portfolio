import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import IntroImage from '../assets/laptop.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import UIButton from './UI/UIButton';
import { outerLinks } from '../utils/enum';
import styles from '../styles/components/Intro.module.scss';

const Intro = () => {
    return (
        <div className={styles.container}>
            <section>
                <h1>
                    Hi! I Am
                    <span> Eliya Melamed</span>
                </h1>
                <p>Fullstack developer with a flair for writing elegant solutions and thinking outside of the box</p>
                <a href='../assets/Eliya+Melamed+Resume.pdf' download>
                    <UIButton>Download CV</UIButton>
                </a>
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

            <img src={IntroImage.src} />
        </div>
    );
};

export default Intro;
