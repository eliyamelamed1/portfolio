import snailon from '../assets/snailon.bmp';
import zbite from '../assets/zbite.bmp';

export const navLinks = ['Home', 'Skills', 'Projects', 'Projects'];
export const outerLinks = {
    github: 'https://github.com/eliyamelamed1',
    linkedin: 'https://www.linkedin.com/in/eliyamelamed1/',
};
export const projectsObj = {
    zbite: {
        id: 'zbite',
        projectName: 'zbite',
        description:
            'A fully social network SSR web app that I built in order to ease the procedure of sharing and finding recipes online',
        bullets: [
            '● Wrote and Managed 637 units and integration tests to improve efficiency and stability of the app.',
            '● Developed a social network web app to ease the procedure of sharing and finding recipes online.',
            '● Built Admin dashboard to monitor data. And wrote an organized documentation.',
        ],
        technologies:
            'PostgreSQL, Python, TypeScript, Django, React, Next, Sass/CSS, Material UI, Pytest, Jest, ElasticSearch.',
        imageArray: [snailon.src, zbite.src],
    },
    weather: {
        id: 'weather',
        projectName: 'weather',
        description: 'desdasdasdasd',
        bullets: ['● buyulte1', '● bullet2'],
        technologies: 'TypeScript, React, Sass/CSS, Material UI',
        imageArray: [snailon.src, zbite.src],
    },
};
