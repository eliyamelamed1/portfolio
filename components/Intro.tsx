import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import IntroImage from '../assets/laptop.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import UIButton from './UI/UIButton';
import { motion } from 'framer-motion';
import { outerLinks } from '../utils/enum';
import styles from '../styles/components/Intro.module.scss';

const Intro = () => {
    return (
        <div className={styles.container}>
            <section>
                <motion.h1>
                    Not Your Average
                    <br />
                    <span> Software Engineer</span>
                </motion.h1>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{ delay: 0.5, duration: 2 }}
                >
                    Fullstack developer with a flair for writing elegant solutions and thinking outside of the box
                </motion.p>
                <motion.a
                    href='../assets/Eliya+Melamed+Resume.pdf'
                    download
                    initial={{
                        x: '-100vw',
                    }}
                    animate={{ x: 0, type: 'spring' }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
                >
                    <UIButton>Download CV</UIButton>
                </motion.a>
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
            <i>
                <Image src={IntroImage.src} alt='project' quality={100} layout='responsive' width={1} height={0.8} />
            </i>
        </div>
    );
};

export default Intro;
