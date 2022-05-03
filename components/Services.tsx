import React from 'react';
import styles from '../styles/components/Services.module.scss';

const Services = () => {
    return (
        <div className={styles.container}>
            <section className={styles.card}>
                <h1>Back-end Developer</h1>
                <p>I like to code things from scratch and enjoy bringing ideas to life in the browser</p>
                <h2>Skills</h2>
                <span>TypeScript, JavaScript, React.js, Next.js, Scss, Css,Material UI, Jest, FramerMotion</span>
            </section>

            <section className={styles.card}>
                <h1>General</h1>
                <p>I like to code things from scratch and enjoy bringing ideas to life in the browser</p>
                <h2>Skills</h2>
                <span>GIT, Figma, Heroku, Vercel, Docker, ElasticSearch, Pygame, SendGrid</span>
            </section>
            <section className={styles.card}>
                <h1>Front-end Developer</h1>
                <p>I like to code things from scratch and enjoy bringing ideas to life in the browser</p>
                <h2>Skills</h2>
                <span>Python, Django, Django REST framework, PostgreSQL, Pytest</span>
            </section>
        </div>
    );
};

export default Services;
