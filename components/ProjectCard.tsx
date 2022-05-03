import ImageSlider from '../components/ImageSlider';
import React from 'react';
import UIButton from './UI/UIButton';
import styles from '../styles/components/ProjectCard.module.scss';
import zbite from '../assets/zbite.bmp';

const ProjectCard = () => {
    return (
        <div className={styles.container}>
            <ImageSlider />
            <h1>
                <span> Zbite</span>
            </h1>
            <h3>
                A fully social network SSR web app that I built in order to ease the procedure of sharing and finding
                recipes online
            </h3>

            <h4>
                <span>Description:</span>
                <p>
                    ● Wrote and Managed 637 units and integration tests to improve efficiency and stability of the app.
                </p>
                <p>● Developed a social network web app to ease the procedure of sharing and finding recipes online.</p>
                <p>● Built Admin dashboard to monitor data. And wrote an organised documentation. </p>
            </h4>

            <h4>
                <span>Technologies:</span>
                <br />
                PostgreSQL, Python, TypeScript, Django, React, Next, Sass/CSS, Material UI, Pytest, Jest, ElasticSearch.
            </h4>

            <section>
                <UIButton>Website</UIButton>
                <UIButton>Code</UIButton>
            </section>
        </div>
    );
};

export default ProjectCard;
