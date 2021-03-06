import GitHubIcon from '@mui/icons-material/GitHub';
import Icons from './Icons';
import Image from 'next/image';
import IntroImage from '../assets/laptop.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import UIButton from './UI/UIButton';
import { motion } from 'framer-motion';
import { outerLinks } from '../utils/enum';
import styles from '../styles/components/Intro.module.scss';

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const Intro = () => {
    const title1 = 'Not Your Average';
    const title2 = 'Software Engineer';
    return (
        <div className={styles.container} id='Home'>
            <section>
                <motion.h1 variants={sentence} initial='hidden' animate='visible'>
                    {title1.split('').map((char, index) => {
                        return (
                            <motion.span className={styles.title1} key={index} variants={letter}>
                                {char}
                            </motion.span>
                        );
                    })}
                    <br />
                    <span>
                        {title2.split('').map((char, index) => {
                            return (
                                <motion.span key={index} variants={letter}>
                                    {char}
                                </motion.span>
                            );
                        })}
                    </span>
                </motion.h1>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{ duration: 2 }}
                >
                    Fullstack developer with a flair for writing elegant solutions and thinking outside of the box
                </motion.p>
                <motion.a
                    href='resume.pdf'
                    download
                    initial={{
                        x: '-100vw',
                    }}
                    animate={{ x: 0, type: 'spring' }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    <UIButton>Download CV</UIButton>
                </motion.a>
                <motion.div className={styles.contactContainer}>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.5 }}
                    >
                        <GitHubIcon
                            className={styles.contactIcons}
                            onClick={typeof window !== 'undefined' ? () => window.open(outerLinks.github) : () => null}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.5 }}
                    >
                        <LinkedInIcon
                            className={styles.contactIcons}
                            onClick={
                                typeof window !== 'undefined' ? () => window.open(outerLinks.linkedin) : () => null
                            }
                        />
                    </motion.div>
                </motion.div>
            </section>
            <motion.i
                initial={{ scale: 0, opacity: 0 }}
                animate={{ rotate: 360, scale: 1, opacity: 1 }}
                transition={{
                    type: 'spring',
                    damping: 20,
                    duration: 2,
                }}
            >
                <Image src={IntroImage.src} alt='project' quality={100} layout='responsive' width={1} height={0.8} />
            </motion.i>
        </div>
    );
};

export default Intro;
