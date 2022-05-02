import { DiDjango, DiHtml5, DiPostgresql, DiSass } from 'react-icons/Di';
import { SiCss3, SiJavascript, SiJest, SiMaterialui, SiNextdotjs, SiPytest, SiRedux } from 'react-icons/Si';
import { SiReact, SiTypescript } from 'react-icons/si';

import { BsGithub } from 'react-icons/Bs';
import { FaPython } from 'react-icons/fa';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import IntroImage from '../assets/intro.svg';
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
                    <br />
                    <span>Eliya Melamed</span>
                </h1>
                <p>
                    Frontend Developer / Fullstack developer with a flair for thinking out of the box and writing
                    elegant solutions
                </p>
                <UIButton>Download CV</UIButton>
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
        </div>
    );
};

export default Intro;

{
    /* <section>
<SiTypescript className={styles.skillIcons} />
<SiReact className={styles.skillIcons} />
<DiDjango className={styles.skillIcons} />
<FaPython className={styles.skillIcons} />
<SiJavascript className={styles.skillIcons} />
<SiCss3 className={styles.skillIcons} />
<DiHtml5 className={styles.skillIcons} />
<SiRedux className={styles.skillIcons} />
<DiPostgresql className={styles.skillIcons} />
<DiSass className={styles.skillIcons} />
<SiNextdotjs className={styles.skillIcons} />
<SiJest className={styles.skillIcons} />
<SiMaterialui className={styles.skillIcons} />
<SiPytest className={styles.skillIcons} />
<BsGithub className={styles.skillIcons} />
</section> */
}
