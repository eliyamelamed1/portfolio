import snailon from '../assets/snailon.bmp';
import tractor from '../assets/tractor.bmp';
import weather from '../assets/weather.bmp';
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
            'A fully social network web app that I built in order to ease the procedure of sharing and finding recipes online',
        bullets: [
            '● Wrote and Managed 637 units and integration tests to improve efficiency and stability of the app.',
            '● Recipes are easily accessible thanks to a search engine I implemented using ElasticSearch.',
            '● Built Admin dashboard to monitor data. And wrote an organized documentation.',
            '● Handled the development process smoothly due to CI/CD (Git actions)',
            '● Wrote the app using Next.js with keen focus of improving SEO rating',
        ],
        technologies:
            'PostgreSQL, Python, TypeScript, Django, React, Next, Sass/CSS, Material UI, Pytest, Jest, ElasticSearch.',
        imageArray: [zbite.src, zbite.src],
        links: {
            code: 'https://github.com/eliyamelamed1/zbite',
            website: 'https://zbite.vercel.app',
        },
    },
    weather: {
        id: 'weather',
        projectName: 'weatherApp',
        description:
            'A simple, responsive, web app in react that shows the weather of searched city. The user should is able to search for a city and save it to favorites.',
        bullets: [
            '● User can toggle between temperature units (Celsius / Fahrenheit)',
            '● initial default weather is based on the user location',
            '● Searchbar support Autocomplete',
            '● support dark/light theme mode',
            '● Animations included',
        ],
        technologies: 'TypeScript, React, Sass/CSS, Material UI',
        imageArray: [weather.src, weather.src],
        links: {
            code: 'https://github.com/eliyamelamed1/WeatherApp',
            website: 'https://weather-app-eliyamelamed1.vercel.app/',
        },
    },
    tractor: {
        id: 'tractor',
        projectName: 'Tractors.fr',
        description: 'a Beautiful Website I built and designed for my client in the construction industry',
        bullets: [
            '● Connected to a postal code and city API to ease the searching process for customers',
            '● Wrote the app using Next.js with keen focus of improving SEO rating',
            '● Developed a website for a client of the tractor renting industry.',
            '● Implemented Searchbar that support Autocomplete',
        ],
        technologies: 'TypeScript, Next.js, React, Sass/CSS, Material UI',
        imageArray: [tractor.src, tractor.src],
        links: {
            code: 'https://github.com/eliyamelamed1/seo-website',
            website: 'https://seo-website-pi.vercel.app/',
        },
    },
    snailon: {
        id: 'snailon',
        projectName: 'Tractors.fr',
        description: 'a Beautiful Website I built and designed for my client in the construction industry',
        bullets: [
            '● Connected to a postal code and city API to ease the searching process for customers',
            '● Wrote the app using Next.js with keen focus of improving SEO rating',
            '● Developed a website for a client of the tractor renting industry.',
            '● Implemented Searchbar that support Autocomplete',
        ],
        technologies: 'TypeScript, Next.js, React, Sass/CSS, Material UI',
        imageArray: [tractor.src, zbite.src],
        links: {
            code: 'https://github.com/eliyamelamed1/seo-website',
            website: 'https://seo-website-pi.vercel.app/',
        },
    },
};
