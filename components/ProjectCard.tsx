import React, { useContext } from 'react';

import ImageSlider from '../components/ImageSlider';
import { ProjectContext } from './UI/UIPopover';
import UIButton from './UI/UIButton';
import { projectsObj } from '../utils/enum';
import styles from '../styles/components/ProjectCard.module.scss';

const ProjectCard = () => {
    const projectId = useContext(ProjectContext).projectId;
    const project = projectsObj[projectId];
    return (
        <div className={styles.container}>
            <ImageSlider imageArray={project.imageArray} />
            <h1>
                <span>{project.projectName}</span>
            </h1>
            <h3>{project.description}</h3>

            <h4>
                <span>Description:</span>
                {project.bullets.map((bullet: string, index: string) => {
                    return <p key={index}>{bullet}</p>;
                })}
            </h4>

            <h4>
                <span>Technologies:</span>
                <br />
                {project.technologies}
            </h4>

            <section>
                <UIButton>Website</UIButton>
                <UIButton>Code</UIButton>
            </section>
        </div>
    );
};

export default ProjectCard;
