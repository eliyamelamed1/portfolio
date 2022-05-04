import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/autoplay';

import ProjectCard from './ProjectCard';
import React from 'react';
import UIPopover from './UI/UIPopover';
import { motion } from 'framer-motion';
import { projectsObj } from '../utils/enum';
import snailon from '../assets/snailon.bmp';
import styles from '../styles/components/Projects.module.scss';
import tractor from '../assets/tractor.bmp';
import weather from '../assets/weather.bmp';
import zbite from '../assets/zbite.bmp';

const Projects = () => {
    return (
        <div className={styles.container}>
            <h1>
                Recent Work
                <br />
                <span>Projects</span>
            </h1>
            <div className={styles.swiper}>
                <UIPopover imageSrc={zbite.src} id={projectsObj.zbite.id}>
                    <ProjectCard />
                </UIPopover>
                <UIPopover imageSrc={tractor.src} id={projectsObj.tractor.id}>
                    <ProjectCard />
                </UIPopover>
                <UIPopover imageSrc={weather.src} id={projectsObj.weather.id}>
                    <ProjectCard />
                </UIPopover>
            </div>
        </div>
    );
};

export default Projects;
